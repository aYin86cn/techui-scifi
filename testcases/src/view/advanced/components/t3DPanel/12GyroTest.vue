<script>
import { tEvent, tStr } from "@techui/utils";
import { onUnmounted, ref } from 'vue';

export default {
  name: 'SensorAccessDemo',
  setup() {
    const uid='gyroTest_'+tStr.rdm();
    const isRunning = ref(false)
    const eventCount = ref(0)
    
    const orientation = ref({
      alpha: 0.0000000000,
      beta: 0.0000000000,
      gamma: 0.0000000000
    })
    
    const acceleration = ref({
      x: 0.0000000000,
      y: 0.0000000000,
      z: 0.0000000000,
      interval: 0.00
    })
    
    const accelerationIncludingGravity = ref({
      x: 0.0000000000,
      y: 0.0000000000,
      z: 0.0000000000
    })
    
    const gyroscope = ref({
      x: 0.0000000000,
      y: 0.0000000000,
      z: 0.0000000000
    })

    const updateFieldIfNotNull = (obj, field, value, precision = 10) => {
      if (value != null) {
        obj[field] = value.toFixed(precision)
      }
    }

    const incrementEventCount = () => {
      eventCount.value++
    }

    const handleOrientation = (event) => {
      updateFieldIfNotNull(orientation.value, 'alpha', event.alpha)
      updateFieldIfNotNull(orientation.value, 'beta', event.beta)
      updateFieldIfNotNull(orientation.value, 'gamma', event.gamma)
      incrementEventCount()
    }

    const handleMotion = (event) => {
      updateFieldIfNotNull(accelerationIncludingGravity.value, 'x', event.accelerationIncludingGravity.x)
      updateFieldIfNotNull(accelerationIncludingGravity.value, 'y', event.accelerationIncludingGravity.y)
      updateFieldIfNotNull(accelerationIncludingGravity.value, 'z', event.accelerationIncludingGravity.z)

      updateFieldIfNotNull(acceleration.value, 'x', event.acceleration.x)
      updateFieldIfNotNull(acceleration.value, 'y', event.acceleration.y)
      updateFieldIfNotNull(acceleration.value, 'z', event.acceleration.z)
      updateFieldIfNotNull(acceleration.value, 'interval', event.interval, 2)

      updateFieldIfNotNull(gyroscope.value, 'z', event.rotationRate.alpha)
      updateFieldIfNotNull(gyroscope.value, 'x', event.rotationRate.beta)
      updateFieldIfNotNull(gyroscope.value, 'y', event.rotationRate.gamma)
      
      incrementEventCount()
    }

    const startDemo = () => {
      // Request permission for iOS 13+ devices
      if (
        typeof DeviceMotionEvent !== 'undefined' &&
        typeof DeviceMotionEvent.requestPermission === 'function'
      ) {
        DeviceMotionEvent.requestPermission()
          .then(response => {
            if (response === 'granted') {
              tEvent.add(window,'devicemotion', handleMotion,uid)
            }
          })
          .catch(console.error)
      } else {
        tEvent.add(window,'devicemotion', handleMotion,uid)
      }

      if (
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        DeviceOrientationEvent.requestPermission()
          .then(response => {
            if (response === 'granted') {
              tEvent.add(window,'deviceorientation', handleOrientation,uid)
            }
          })
          .catch(console.error)
      } else {
        tEvent.add(window,'deviceorientation', handleOrientation,uid)
      }
      isRunning.value = true
    }

    const stopDemo = () => {
      tEvent.remove(window,'deviceorientation',uid)
      tEvent.remove(window,'devicemotion',uid)
      isRunning.value = false
    }

    const toggleDemo = () => {
      if (isRunning.value) {
        stopDemo()
      } else {
        startDemo()
      }
    }

    // Clean up event listeners when component is unmounted
    onUnmounted(() => {
      tEvent.remove(window,'deviceorientation',uid)
      tEvent.remove(window,'devicemotion',uid)
      if (isRunning.value) {
        stopDemo()
      }
    })

    return {
      isRunning,
      eventCount,
      orientation,
      acceleration,
      accelerationIncludingGravity,
      gyroscope,
      toggleDemo
    }
  }
}
</script>
<template>
  <div class="container">
    <h1 class="text-left">JavaScript Sensor Access Demo</h1>
    <p><b>This demo page should be run from a mobile phone or a tablet.</b></p>
    <p>This demo page shows how websites can access sensor data from mobile devices using <a href="https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation"><i>deviceorientation</i></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion"><i>devicemotion</i></a> events.</p>

    <p><i>deviceorientation</i> provides <i>alpha</i>, <i>beta</i> and <i>gamma</i> components which correspond to orientation along the Z, X and Y axes, respectively.</p>
    <p><i>devicemotion</i> provides acceleration and rotation rate along three axes using MEMS accelerometers and gyroscopes.</p>

    <p>The sensor data shown below does not leave your browser: it is not collected, shared or transmitted. However this may not be true for other websites that you visit. For more information, see the companion page for our study: <a href="https://sensor-js.xyz/">"The Web's Sixth Sense: A Study of Scripts Accessing Smartphone Sensors"</a>.</p>

    <div class="p-3 mb-2 bg-secondary" id="demo-div">
      <a class="btn btn-lg py-1" :class="isRunning ? 'btn-danger' : 'btn-success'" href="#" role="button" @click.prevent="toggleDemo">
        {{ isRunning ? 'Stop the demo' : 'Start the demo' }}
      </a>
      <p style="margin-top:1rem;">Num. of datapoints: <span class="badge badge-warning">{{ eventCount }}</span></p>

      <h4 style="margin-top:0.75rem;">Orientation</h4>
      <ul>
        <li>X-axis (β): <span>{{ orientation.beta }}</span><span>°</span></li>
        <li>Y-axis (γ): <span>{{ orientation.gamma }}</span><span>°</span></li>
        <li>Z-axis (α): <span>{{ orientation.alpha }}</span><span>°</span></li>
      </ul>

      <h4>Accelerometer</h4>
      <ul>
        <li>X-axis: <span>{{ acceleration.x }}</span><span> m/s<sup>2</sup></span></li>
        <li>Y-axis: <span>{{ acceleration.y }}</span><span> m/s<sup>2</sup></span></li>
        <li>Z-axis: <span>{{ acceleration.z }}</span><span> m/s<sup>2</sup></span></li>
        <li>Data Interval: <span>{{ acceleration.interval }}</span><span> ms</span></li>
      </ul>

      <h4>Accelerometer including gravity</h4>
      <ul>
        <li>X-axis: <span>{{ accelerationIncludingGravity.x }}</span><span> m/s<sup>2</sup></span></li>
        <li>Y-axis: <span>{{ accelerationIncludingGravity.y }}</span><span> m/s<sup>2</sup></span></li>
        <li>Z-axis: <span>{{ accelerationIncludingGravity.z }}</span><span> m/s<sup>2</sup></span></li>
      </ul>

      <h4>Gyroscope</h4>
      <ul>
        <li>X-axis: <span>{{ gyroscope.x }}</span><span>°/s</span></li>
        <li>Y-axis: <span>{{ gyroscope.y }}</span><span>°/s</span></li>
        <li>Z-axis: <span>{{ gyroscope.z }}</span><span>°/s</span></li>
      </ul>
    </div>

    <footer class="footer">
      <div class="container">
        <span class="text-muted small">This page is hosted on GitHub Pages, please see GitHub's privacy statement
        <a href="https://help.github.com/articles/github-privacy-statement/">here</a>.</span>
      </div>
    </footer>
  </div>
</template>
<style scoped>
#demo-div {
  color: lightgrey;
  border-radius: 0.3rem;
}
#demo-div span {
  color: black;
}
h1 {
  margin-top: 0.5rem;
}
h4 {
  margin-top: 0.66rem;
  font-size: 1.33rem;
}
#demo-div li {
  line-height: 21px;
}
#demo-div ul {
  margin-bottom: 0.66rem;
}
</style>