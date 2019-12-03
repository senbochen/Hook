单例模式demo：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    #modal {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 300px;
        border: 1px solid #080808;
        box-shadow: 0 0 7px #4e4d4d;
        border-radius: 8px;
        transform: scale(0);
    }

    #modal p {
        text-align: center;
        font-size: 18px;
        text-shadow: 0 0 2px #171717;
        color: #040000;
    }

    .show {
        transform: scale(1.1) !important;
        transition: all .4s linear;
    }

    .hide {
        transform: scale(0) !important;
        transition: all .6s linear;
    }
</style>

<body>
    <button id="button">添加</button>
    <button id='delete'>删除</button>

</body>

</html>
<script>
    class Danli {
        static instance // 静态变量
        constructor(id, html) {

            this.id = id;
            this.html = html
            this.open = false;
            this.getid = function (id) {
                return typeof id === "string" ? document.getElementById(id) : '';
            }
            if (Danli.instance) {
                return Danli.instance
            } else {
                Danli.instance = this // 否则让构造函数正常运行新建单例并且保存下来
            }
        }
        create() {
            if (!this.open) {
                let modal = document.createElement('div');
                modal.id = this.id
                modal.innerHTML = this.html;
                document.querySelector('body').appendChild(modal)
                setTimeout(() => {
                    modal.classList.add('show');
                }, 0)
                this.open = true;
            }
        }
        close() {
            if (this.open) {
                console.log(this.getid(this.id))
                this.getid(this.id).classList.add('hide').remove('show')
                setTimeout(() => {
                    document.querySelector('body').removeChild(this.getid(this.id));
                }, 900)
                this.open = false;
            }
        }
    }

    const modal = new Danli('modal', '<p>你就是一个弹框</p>');
    document.querySelector('#button').addEventListener('click', function () {
        Danli.instance.create()

    })
    document.querySelector('#delete').addEventListener('click', function () {
        Danli.instance.close()
    })
</script>
```
