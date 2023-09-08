<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EdgesGeometry, LineBasicMaterial, LineSegments } from 'three'

import { gsap } from 'gsap'

import { onMounted, ref } from 'vue' // Import onMounted from Vue

const canvas = ref<HTMLCanvasElement>()



onMounted(() => {
    console.log("jwdjwjwdjwjwj")
    //Scene
    if (canvas === null) {
        console.error("Canvas element not found")
        return
    }

    const scene = new THREE.Scene()




    //Create sphere
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshPhongMaterial({
        color: '#000000',
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Create edges geometry
    const edgesGeometry = new EdgesGeometry(geometry)
    const edgesMaterial = new LineBasicMaterial({ color: '#ffffff' })
    const edgesMesh = new LineSegments(edgesGeometry, edgesMaterial)
    scene.add(edgesMesh)


    //Size
    const sizes = {
        width: 500,
        height: 500,
    }


    //Light
    const light = new THREE.AmbientLight(0xffffff, 0.5)
    light.position.set(0, 10, 10)
    light.intensity = 2
    scene.add(light)


    //Camera, 45 = field of view, 800,600 = aspect ratio
    const camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        0.1,
        100
    )
    camera.position.z = 20
    scene.add(camera)


    //Controls
    const controls = new OrbitControls(camera, canvas.value)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false



    //Renderer

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas.value
    })
    renderer.setClearColor('#ffffff')



    renderer.setSize(
        sizes.width,
        sizes.height
    )


    //Resize
    window.addEventListener('resize', () => {
        //Update size
        console.log(window.innerWidth)
        sizes.width = window.innerWidth,
            sizes.height = window.innerHeight,

            //Update camera
            camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
    })


    function animate() {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
        edgesMesh.rotation.copy(mesh.rotation)

        //Update controls
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
    }

    animate()


    //TimeLine 
    const timeline = gsap.timeline({ defaults: { duration: 1 } })
    timeline.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
    /*
    //Mouse animation color
    let mouseDown = ref(false)
    let rgb = []
    window.addEventListener("mousedown", () => (mouseDown.value = true))
    window.addEventListener("mouseup", () => (mouseDown.value = false))

    window.addEventListener("mousemove", (e) => {
        if (mouseDown) {
            rgb = [
                Math.round((e.pageX / sizes.width) * 255),
                Math.round((e.pageY / sizes.height) * 255),
                150,
            ]
            let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)

            gsap.to(mesh.material.color, { 
                r: newColor.r, 
                g: newColor.g, 
                b: newColor.b 
            })
        }
    })
    */
})



</script>

<template>
    <canvas class="position" ref="canvas"></canvas>
</template>


<style scoped>
.position {
    cursor: pointer;
}
</style>