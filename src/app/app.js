import $ from '@/utils/query'
import { attachTo } from '@/utils/webgl'

import Color from "color";

const setStyle = (e, p, v) => e.style.setProperty(p, v)
const getStyleAsRGB = (e, p) => Color(getComputedStyle(e).getPropertyValue(p).trim()).object()

const updateGlobalColorVariables = () => {
    window.color = {
        textNormal: getStyleAsRGB(document.documentElement, '--text-color--normal'),
        textRicher: getStyleAsRGB(document.documentElement, '--text-color--richer'),
        textHighlight: getStyleAsRGB(document.documentElement, '--text-color--highlight'),
        background: getStyleAsRGB(document.documentElement, '--background'),
        backgroundContent: getStyleAsRGB(document.documentElement, '--background--content'),
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // This will make sure our global color variables are updated when
    // the user changes color schemes.
    window.matchMedia('(prefers-color-scheme: light)').addListener(updateGlobalColorVariables)
    
    // Initialize the global color variables
    updateGlobalColorVariables()
    
    window.attachTo('p2d')

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '3', '9', '81', '1000'],
        responsive: true,
        datasets: [{
            label: 'Naive',
            fill: false,
            data: [0, 3, 9, 81, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
        },{
            label: 'Quadtree',
            fill: false,
            data: [4, 50, 50, 120, 300],
            backgroundColor: [
                'rgba(35, 99, 255, 0.2)',
            ],
            borderColor: [
                'rgba(35, 99, 132, 1)',
            ],
        }]
    },
});
})
