<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"/>
    </a>
    <button v-if="loginStatus" @click="kakaoLogout()">로그아웃</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loginStatus: false
    }
  },
  methods: {
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response)
        if (response) {
          this.loginStatus = false
        }
      })
    },
    kakaoLogin() {
      window.Kakao.Auth.login({
        // redirectUri: 'http://localhost:8080/login', // 카카오 Redirect URI에 등록되어 있어야함
        scope: 'profile_nickname, profile_image, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: response => {
          const kakaoAccount = response.kakao_account
          const nickname = kakaoAccount.profile.nickname
          const profileImageUrl = kakaoAccount.profile.profile_image_url
          const email = kakaoAccount.email
          
          console.log('nickname', nickname)
          console.log('profile image url', profileImageUrl)
          console.log('email', email)

          alert('로그인 성공!')
          this.loginStatus = true
        },
        fail: error => {
          this.loginStatus = false
          console.log(error)
        }
      })
    }
  }
}
</script>
