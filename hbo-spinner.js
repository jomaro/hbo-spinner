
const radius = 8;
const diameter = 2 * radius;
const gap = 15;
const outer_padding = 5;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function left_positioning(angle) {
    return outer_padding + 3 * radius + gap + Math.cos(2*angle*Math.PI) * (diameter + gap) + 'px';
}

function opacity(angle) {
    return Math.sin(2*angle*Math.PI) / 2 + 0.5;
}

async function hbo_spinner(elem) {
    const spinner_offsets = [0, 0.25, 0.5, 0.75];
    const rotation_time_ms = 2000;
    const fps = 30;
    let frame_offset = 0.0;


    while(true) {
        elem.innerHTML = '';

        for(const spinner_offset of spinner_offsets) {
            const sp1 = document.createElement('div');

            sp1.style.top = outer_padding + radius + 'px';
            sp1.style.left = left_positioning(spinner_offset + frame_offset);
            sp1.style.backgroundColor = 'rgb(255 255 255 / ' + opacity(spinner_offset + frame_offset) + ')';

            elem.appendChild(sp1);
        }

        await sleep(1000/fps)

        frame_offset += fps/rotation_time_ms
    }
}

export { hbo_spinner };
