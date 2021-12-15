<template>
  <div>
    <div id="google-signin-btn"></div>
    <button v-if="loginStatus" @click="onSignout">로그아웃</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: false
    }
  },
  mounted() {
    // 구글 라이브러리 로드 트리거 구독
    window.addEventListener('google-loaded', this.renderGoogleLoginButton)
  },
  methods: {
    renderGoogleLoginButton() {
      window.gapi.signin2.render('google-signin-btn', {
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: this.onSignIn,
        onfailure: this.onFailure
      })
    },
    onFailure() {
      console.log('구글 로그인 버튼 렌더링 실패!')
    },
    onSignIn(googleUser) {
      console.log(googleUser.getGrantedScopes())

      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())

      const idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + idToken)

      this.loginStatus = true
    },
    onSignout() {
      window.gapi.auth2.getAuthInstance().signOut()
      this.loginStatus = false
    }
  }
}
</script>
