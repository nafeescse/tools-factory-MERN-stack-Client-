import React from 'react';

const Countdown = () => {
    let counterS = 60;
    setInterval(() => {
        if (counterS>0) {
          
            counterS--
      
        }
        document.getElementById('counterSElement').style.setProperty('--value', counterS)
    }, 1000)
    let counterM = 60;
    setInterval(() => {
        if (counterM>0) {
            
            counterM--

        }
        document.getElementById('counterMElement').style.setProperty('--value', counterM)
    }, 1000)
    let counterH = 24;
    setInterval(() => {
        if (counterH>0) {
            counterH--
            return

        }
        document.getElementById('counterHElement').style.setProperty('--value', counterH)
    }, 3600000)

    return (
        <div>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span id="counterHElement"></span>
                    </span>
                    hours
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span id="counterMElement"></span>
                    </span>
                    min
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span 
                            id="counterSElement" ></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Countdown;