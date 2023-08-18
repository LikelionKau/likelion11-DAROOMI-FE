// const startButton = document.getElementById('startButton');
// const localVideo = document.getElementById('localVideo');
// /*/
// startbutton이라는 객체에 변수를 가져옴.
//  */
// startButton.addEventListener('click', async () => {
//     const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//     /*/ 화면공유할수있게끔 도와주는 기능/*/
//     localVideo.srcObject = stream; /*/비디오 부분에 화면공유하는 것을 넣어줬다./*/
// });
window.onload = async function () {
    try {
        const sharedScreenContainer = document.querySelector('.shared-screen-container');
        const sharedScreenVideo = document.querySelector('.sharedScreen');

        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        sharedScreenVideo.srcObject = stream;
        sharedScreenVideo.play();
        sharedScreenContainer.style.display = 'block';
        console.log('작동중');
    } catch (error) {
        console.error('Error accessing screen:', error);
    }
}

const exit = document.getElementById('exit')
exit.addEventListener("click", function (){
    location.href="../../HTML/SpendingCustomer/survey.html"
})
