<template>
  <div id="particles">
    <div id="login">
    <div class="login-title">学而思培优数据平台</div>
      <div class="login-form">
        <div class="login-user">
          <b><img src="../../../assets/img/login_icon_urer@2x.png" alt=""></b>
          <input type="text" v-model="message.username"></div>
        <div class="login-pwd">
          <b><img src="../../../assets/img/login_icon_password@2x.png" alt=""></b>
          <input type="text" v-model="message.password"></div>
        <div class="login-hint">{{this.hint}}</div>
        <div class="login-btn"><input type="button" value="登陆" @click='btnClick'></div>
      </div>
    </div>
  </div>
</template>
<script>
import fetcher from '../../../tools/fetcher';
export default {
    data () {
        return {
            message: {
            },
            hint: ''
        };
    },
    methods: {
        btnClick () {
            fetcher.post('/api/login', this.message).then((res) => {
                if (Number(res.code)) {
                    localStorage.setItem('token', res.token);
                    this.hint = '';
                    this.$router.push('/home');
                    localStorage.setItem('username', res.username);
                } else {
                    this.hint = '账号或密码错误，请重新输入';
                }
            });
        }
    },
    mounted () {
        particlesJS.load('particles', './src/assets/particles.data');
    }
};
</script>
<style>
 #login{
   z-index: 99;
   position: absolute;
   width:100%;
   height:100%;
   position: relative;
   padding-top:117px;
 }
 .login-title{
    margin:0 auto;
    width:330px;
    height: 45px;
    line-height:45px;
    text-align: center;
    font-family: MicrosoftYaHei-Bold;
    font-size: 34px;
    color: #FFFFFF;
    letter-spacing: 2.66px;
    font-weight:600; 
    color:#fff;
 }
 .login-form{
   margin:0 auto;
   margin-top:45px;
   width:410px;
   height: 371px;
   background:rgba(255,255,255,.1);
   padding:40px 30px;
 }
 .login-user,.login-pwd{
   position: relative;
   height: 60px;
 }
 .login-user b,.login-pwd b{
   position: absolute;
   top:21px;
   left:18px;
   width:18px;
   height:18px;
 }
 .login-user b img,.login-pwd b img{
   width:100%;
   height:100%;
 }
 .login-user input,.login-pwd input{
   width:100%;
   height:100%;
   background:rgba(255,255,255,.82);
   border:none;
   border-radius: 2px;
   padding-left:46px;
 }
 .login-pwd{
   margin-top:30px;
 }
 .login-hint{
    height: 60px;
    text-align: center;
    line-height:60px;  
    font-family: "MicrosoftYaHei";
    font-size: 14px;
    color: #FF4040;
    letter-spacing: 1.1px;
 }
 .login-btn{
   height:60px;
 }
 .login-btn input{
    height: 100%;
    width:100%;
    background: #00D2C0;
    border-radius: 2px;
    border:none;
    font-family: MicrosoftYaHei;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 1.2px;
  }
  #particles{
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
  }
  .particles-js-canvas-el{
    position: absolute;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    
   background:url('../../../assets/img/login_bg.jpg') no-repeat 100%;
  }
</style>

