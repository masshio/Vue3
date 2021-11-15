import { reactive, onMounted, onUnmounted } from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })
    function getPoint(event) {
        point.x = event.clientX
        point.y = event.clientY
    }
    onMounted(() => {
        window.addEventListener("click",getPoint)
    })
    onUnmounted(() => {
        window.removeEventListener("click", getPoint)
    })
    return point;
}