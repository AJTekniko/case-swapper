        let textBox = document.getElementById("textBox")
        let originalText = document.getElementById("originalText")
        let alternating;
        let myCheckbox = document.getElementById("myCheckbox");
        let currentStatus = myCheckbox.checked;
        myCheckbox.addEventListener('change', function() {
            currentStatus = this.checked;
            alternating = currentStatus;
        });
        function toggleChar(cadena, alternacion) {
          let resultado = "";
          if (alternating) {
            let cuenta = 0;
            for (let caracter of cadena) {
              if (cuenta % 2 === 0) {
                resultado += caracter.toUpperCase();
                if (caracter.toLowerCase() !== caracter.toUpperCase()) {
                cuenta += 1
                }
              } else if (caracter.toLowerCase() !== caracter.toUpperCase()) {
                resultado += caracter.toLowerCase();
                cuenta += 1
              }
            }
          } else {
            for (let caracter of cadena) {
              if (caracter === caracter.toUpperCase()) {
                resultado += caracter.toLowerCase();
              } else {
                resultado += caracter.toUpperCase();
              }
            }
          }
          document.getElementById("finalText").textContent = resultado;
        }
        function generate() {
            if(originalText.value.length > 0) {
                toggleChar(originalText.value, alternating);
                textBox.classList.add("show-text");
                event.preventDefault();
            } else {
                originalText.classList.add('error');
                setTimeout(()=>{
                    originalText.classList.remove('error');
                },1000);
                event.preventDefault();
            }
        }