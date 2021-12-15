<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout" v-if="loginStatus">로그아웃</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      naverLogin: null,
      loginStatus: false
    }
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: '2KCEXxUR4fmv4GqiHpBE',
      callbackUrl: 'http://localhost:8080/naverlogin', // 네이버 로그인 Callback URL에 등록되어 있어야함
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    })

    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        var email = this.naverLogin.user.getEmail()
        if (email === undefined || email == null) {
          alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요.')
          this.naverLogin.reprompt()
          return
        }

        this.loginStatus = true
      } else {
        console.log('callback 처리에 실패하였습니다.')
        this.loginStatus = false
      }
    })
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken
      const url = `/oauth2.0/token?` +
      `grant_type=delete&` +
      `client_id=2KCEXxUR4fmv4GqiHpBE&` +
      `client_secret=uh_ns8t1lV&` +
      `access_token=${accessToken}&` +
      `service_provider=NAVER`

      axios.get(url)
        .then((res) => {
          console.log(res.data)
          if (res.data.result === 'success') {
            this.loginStatus = false
          }
        })
    }
  }
}
</script>
