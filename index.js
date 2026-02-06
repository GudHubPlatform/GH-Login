class GudhubLogin extends HTMLElement {

    constructor() {
        super();
        this.mode;
        this.template_id;
        this.gudhub_node_server_url;
        this.action;
    }

    connectedCallback() {
        this.mode = this.getAttribute('mode');
        this.template_id = this.getAttribute('template_id');
        this.gudhub_node_server_url = this.getAttribute('gudhub_node_server_url');
        this.action = this.getAttribute('action');
        this.innerHTML = /*html*/`
        <form class="login-form auth">
            <h2 class="login-form__title">
                Login
            </h2>
            <div class="change-auth-form">Don't have an account? <a href="/signup/">Sign up</a></div>
            <div class="login-form__item">
                <label>Email</label>
                <input type="email" class="email" name="email">
                <div class="error email__error">
                    <span>
                        Wrong email!
                    </span>
                </div>
            </div>
            <div class="login-form__item login-form__item-password item__password">
                <label>Password</label>
                <input type="password" class="password" name="password">
                <!--<a href="" style="display:none" class="password__forgot">Forgot your password?</a>-->
                <div class="password__toggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#BCBAB8"/>
                        <line x1="4.70711" y1="3.29289" x2="22.7071" y2="21.2929" stroke="white" stroke-width="2"/>
                        <line x1="4.70711" y1="3.29289" x2="22.7071" y2="21.2929" stroke="white" stroke-width="2"/>
                        <line x1="3.35355" y1="3.64645" x2="20.3536" y2="20.6464" stroke="#BCBAB8"/>
                    </svg>
                </div>
                <div class="error password__error">
                    <span>
                        Wrong password!
                    </span>
                </div>
            </div>
            <button type="submit" class="auth__button">
                Login
            </button>
        </form>

    <style>
        .change-auth-form {
            text-align: center;
            margin-bottom: 20px;
            font-size: 20px;
        }
        .change-auth-form a {
            color: #0893d2;
        }
        gudhub-login.inside-popup .login-form {
            background: #fff;
            padding: 20px;
            margin-top: 0;
        }
        gudhub-login.inside-popup .login-form__title {
            margin-top: 0;
        }
 .login-form {
	 width: 550px;
	 padding: 0 15px;
	 margin: 0 auto;
	 margin-top: 139px;
}
 .login-form__title {
	 font-family: Tahoma;
	 font-weight: normal;
	 font-size: 36px;
	 line-height: 43px;
	 text-align: center;
	 letter-spacing: 0.03em;
	 color: #0893d2;
	 margin-bottom: 24px;
}
 .login-form__item {
	 width: 100%;
	 margin-bottom: 22px;
}
 .login-form__item label {
	 display: block;
	 font-family: Tahoma;
	 font-weight: normal;
	 font-size: 16px;
	 line-height: 19px;
	 letter-spacing: 0.03em;
	 color: rgba(0, 0, 0, 0.6);
	 margin-bottom: 12px;
}
 .login-form__item input {
	 width: 100%;
	 height: 46px;
	 background: #fff;
	 border: 1px solid #bcbab8;
	 border-radius: 4px;
	 font-family: Tahoma;
	 font-weight: normal;
	 font-size: 18px;
	 line-height: 22px;
	 letter-spacing: 0.03em;
	 color: #000;
	 padding: 0px 10px;
}
 .login-form__item.error .error {
	 display: flex;
}
 .login-form__item.error input {
	 border-color: red;
}
 .login-form__item .error {
	 display: none;
	 margin-top: 5px;
}
 .login-form__item .error span {
	 color: red;
}
 .login-form .login-form__item-password {
	 position: relative;
}
.login-form .login-form__item-password .password__forgot {
	 position: absolute;
	 top: 0;
	 right: 0;
	 font-family: Tahoma;
	 font-weight: normal;
	 font-size: 12px;
	 line-height: 14px;
	 text-align: center;
	 letter-spacing: 0.03em;
	 color: rgba(0, 0, 0, 0.5);
}
.login-form .login-form__item-password .password__toggle {
	 position: absolute;
	 right: 15.5px;
	 top: 42px;
	 width: 22px;
	 height: 15px;
	 cursor: pointer;
}
.login-form .password__toggle.visible svg line {
            display: none;
        }
 .login-form button {
	 margin-top: 12px;
	 width: 100%;
	 height: 42px;
	 padding: 10px 30px;
	 border-radius: 4px;
	 border: none;
	 font-family: Tahoma;
	 font-weight: normal;
	 font-size: 18px;
	 line-height: 22px;
	 text-align: center;
	 letter-spacing: 0.03em;
	 color: #fff;
	 background-color: #0893d2;
	 cursor: pointer;
}


@media screen and (max-width: 600px) {
 .login-form {
      width: calc(100% - 40px);
      margin-top: 60px;
    }
}
    </style>
        `;

        this.addListeners();
    }

    addListeners() {
        this.querySelector('.password__toggle').addEventListener('click', () => {
            this.togglePasswordShow();
        });

        this.querySelector('.login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            if(this.validate() && this.mode === 'login') {
                let data = await this.login();
                if(data === false) return;

                let user = {
                    fullname: data.fullname,
                }

                if(data.avatar_512) {
                    user.photo = data.avatar_512
                }

                if(this.action === 'event') {

                    const event = new CustomEvent('gudhub-login', {
                        detail: {
                            data
                        }
                    });

                    window.dispatchEvent(event);

                } else {
    
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('auth_key', data.auth_key);
                    window.location.href = "/apps/";

                }
            } else if(this.validate() && this.mode === 'install') {
                window.dispatchEvent(new CustomEvent('gudhub-popup-toggle-loader'));
                window.dispatchEvent(new CustomEvent('gudhub-popup-update-status', {
                    detail: {
                        percent: 0,
                        text: 'Logging in'
                    }
                }));
                let data = await this.login();
                if(data === false) {
                    window.dispatchEvent(new CustomEvent('gudhub-popup-toggle-loader'));
                    window.dispatchEvent(new CustomEvent('gudhub-popup-clear-status'));
                }
                window.dispatchEvent(new CustomEvent('gudhub-popup-update-status', {
                    detail: {
                        percent: 10,
                        text: 'Logged in'
                    }
                }));

                let response = await fetch(`${this.gudhub_node_server_url}/app-install/express-install`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        auth_key: data.auth_key,
                        template_id: this.template_id
                    })
                })

                let user;

                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                while (true) {
                    const { done, value } = await reader.read();
        
                    if (done) {
                        break;
                    }
        
                    /* TODO: Fix array wrapper (need to fix response first) */
        
                    let decoded = decoder.decode(value);
                    decoded = '[' + decoded.replaceAll('}{', '},{') + ']';
                    let response;
                    try {
                        response = JSON.parse(decoded);
                    } catch (err) {
                        console.log(`Invalid JSON at response chunk: ${decoded}`);
                        console.log(err);
                    }
                    response.forEach(item => {
                        if (item.status === 'error') {
                            if (item.message === 'Email already registered') {
                                this.emailRegisteredError();
                                window.dispatchEvent(new CustomEvent('gudhub-popup-toggle-loader'));
                            }
                        } else if (item.status !== 'Done' && item.status !== 'success') {
                            window.dispatchEvent(new CustomEvent('gudhub-popup-update-status', {
                                detail: {
                                    percent: item.percent,
                                    text: item.status
                                }
                            }));
                            console.log(item);
                        } else if (item.status === 'success') {
                            window.dispatchEvent(new CustomEvent('gudhub-popup-clear-status'));
                            let userToSave = {
                                fullname: data.fullname,
                            }
                
                            if (data.avatar_512) {
                                userToSave.photo = data.avatar_512;
                            }
                
                            localStorage.setItem('user', JSON.stringify(userToSave));
                
                            localStorage.setItem('auth_key', data.auth_key);
                
                            window.location.href = "/apps/";
                        }
                    })
                }
            }
        });

        this.querySelector('.change-auth-form a').addEventListener('click', e => {
            if(this.mode === 'install') {
                e.preventDefault();
                const event = new CustomEvent('gudhub-popup-form-change', {
                    detail: {
                        to: 'signup'
                    }
                });

                window.dispatchEvent(event);
            }
        });
    }

    async login() {

        let credentials = {
            username: this.querySelector('input[type="email"]').value,
            password: this.querySelector('.password').value
        }

        let { GudHub } = GudHubLibrary;

        let gudhub = await new GudHub('', {
            server_url: 'https://app.gudhub.com/GudHub',
        });

        let response;

        try {

            response = await gudhub.login(credentials);

        } catch (err) {

            if(err.response.status === 711) {
                this.querySelector('input[type="email"]').parentElement.classList.add('error');
                return false;
            } else if (err.response.status === 712) {
                this.querySelector('.password').parentElement.classList.add('error');
                return false;
            }

        }

        return response;
    }

    validate() {
        const emailInput = this.querySelector('input[type="email"]');
        const emailValue = emailInput.value;

        const passwordInput = this.querySelector('.password');
        const passwordValue = passwordInput.value;

        if(emailValue.length < 3 || !emailValue.includes('@')) {
            emailInput.parentElement.classList.add('error');
            return false;
        } else {
            emailInput.parentElement.classList.remove('error');
        }

        if(passwordValue.length < 1) {
            passwordInput.parentElement.classList.add('error');
            return false;
        } else {
            passwordInput.parentElement.classList.remove('error');
        }

        return true;
    }

    togglePasswordShow() {
        const toggleButton = this.querySelector('.password__toggle');

        toggleButton.classList.toggle('visible');
        if (toggleButton.classList.contains('visible')) {
            this.querySelector('.password').setAttribute('type', 'text');
        } else {
            this.querySelector('.password').setAttribute('type', 'password');
        }
    }

}

if (!window.customElements.get('gudhub-login')) {
    window.customElements.define('gudhub-login', GudhubLogin);
}