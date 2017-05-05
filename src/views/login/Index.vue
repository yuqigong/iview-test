<template>
    <form class="form-signin">
        <h2 class="form-signin-heading">后台管理</h2>
        <label for="inputUser" class="sr-only">User Name</label>
        <input type="text" id="inputUser" v-model="username" class="form-control" placeholder="User Name" required=""
               autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password"
               required="">
        <button class="btn btn-sm btn-primary btn-block" type="submit" @click="login">登 录</button>
    </form>
</template>
<script lang="babel">
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login () {
                if (!this.username) {
                    alert('用户名不能为空')
                } else if (!this.password) {
                    alert('密码不能为空')
                } else {
                    console.log('登录成功');
                    this.$router.push('dashboard');
                }
            }
        }
    }
</script>
<style lang="css">
    body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #eee;
    }

    .form-signin {
        max-width: 330px;
        padding: 15px;
        text-align: center;
        margin: 0 auto;
    }

    .form-signin .form-signin-heading,
    .form-signin .checkbox {
        margin-bottom: 10px;
    }

    .form-signin .checkbox {
        font-weight: normal;
    }

    .form-signin .form-control {
        position: relative;
        height: auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="text"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
