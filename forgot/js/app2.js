function verify() {
  const verifyCode = document.querySelector('.btn-send')
  let btn = document.documentElement

  verifyCode.addEventListener('click', () => {
    btn.setAttribute('verify', 'true')
  })
}

verify()