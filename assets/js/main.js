// fiz de forma anti-usual a parte das teclas, por que usei o que eu sabia por ENQUANTO 29/11/2022
const numeros = document.querySelector('.btn-num')
const um = document.querySelector('.um');
const dois = document.querySelector('.dois');
const tres = document.querySelector('.tres');
const quatro = document.querySelector('.quatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const sete = document.querySelector('.sete');
const oito = document.querySelector('.oito');
const nove = document.querySelector('.nove');
const zero = document.querySelector('.zero');
const backspace = document.querySelector('.btn-delete');
const btnTema = document.querySelector('button');
const bg = document.querySelector('.section-geral');
const container = document.querySelector('.container')


function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBotoes();
            this.teclasDown();
            this.teclasUp();
        },


        clearDisplay() {
            this.display.value = '';
        },


        apagar() {
            this.display.value = this.display.value.slice(0, -1)

        },


        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(conta);

            } catch (e) {
                alert('Conta invalida');
            }
        },




        clickBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                console.log(el)
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);

                }

                if (el.classList.contains('btn-cancelar')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-delete')) {
                    this.apagar();

                }
                if (el.classList.contains('btn-igual')) {
                    this.realizaConta();
                }
            }.bind(this))
        },

        // fiz de forma anti-usual a parte do css, por que usei o que eu sabia por ENQUANTO 29/11/2022
        teclasDown() {
            document.addEventListener('keydown', function (e) {
                this.display.focus();

                if (e.key === 'Enter') {
                    this.realizaConta()
                }

                if (e.key === '1') {
                    um.classList.add('btn-keydown')
                }

                if (e.key === '2') {
                    dois.classList.add('btn-keydown')
                }

                if (e.key === '3') {
                    tres.classList.add('btn-keydown')
                }

                if (e.key === '4') {
                    quatro.classList.add('btn-keydown')
                }

                if (e.key === '5') {
                    cinco.classList.add('btn-keydown')
                }

                if (e.key === '6') {
                    seis.classList.add('btn-keydown')
                }

                if (e.key === '7') {
                    sete.classList.add('btn-keydown')
                }

                if (e.key === '8') {
                    oito.classList.add('btn-keydown')
                }

                if (e.key === '9') {
                    nove.classList.add('btn-keydown')
                }

                if (e.key === '0') {
                    zero.classList.add('btn-keydown')
                }



                if (e.key === 'Backspace') {
                    backspace.classList.add('btn-delete-keydown')
                    this.apagar()
                }

                if (e.key === 'Delete') {
                    this.clearDisplay();
                }


            }.bind(this))
        },
        teclasUp() {
            document.addEventListener('keyup', function (e) {

                if (e.key === '1') {

                    um.classList.remove('btn-keydown')
                }

                if (e.key === '2') {
                    dois.classList.remove('btn-keydown')
                }

                if (e.key === '3') {
                    tres.classList.remove('btn-keydown')
                }

                if (e.key === '4') {
                    quatro.classList.remove('btn-keydown')
                }

                if (e.key === '5') {
                    cinco.classList.remove('btn-keydown')
                }

                if (e.key === '6') {
                    seis.classList.remove('btn-keydown')
                }

                if (e.key === '7') {
                    sete.classList.remove('btn-keydown')
                }

                if (e.key === '8') {
                    oito.classList.remove('btn-keydown')
                }

                if (e.key === '9') {
                    nove.classList.remove('btn-keydown')
                }

                if (e.key === '0') {
                    zero.classList.remove('btn-keydown')
                }

                if (e.key === 'Backspace') {
                    backspace.classList.remove('btn-delete-keydown')
                }
            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

btnTema.addEventListener('click', function (e) {
    if (bg.classList.contains('dark') && container.classList.contains('light')) {
        bg.classList.remove('dark');
        bg.classList.add('light');
        numeros.classList.remove('')
    }

    if (bg.classList.contains('light') && container.classList.contains('light')) {
        bg.classList.remove('light')
        bg.classList.add('dark')
    }
})

const calculadora = criaCalculadora();
calculadora.inicia();