<script lang="ts">
   import { T } from "@threlte/core";
   import { OrbitControls, interactivity, useGltf } from "@threlte/extras";

   export let model: string;

   interactivity();
</script>

<T.PerspectiveCamera
   makeDefault
   position={[10, 10, 10]}
   on:create={({ ref }) => {
      ref.lookAt(0, 0, 0);
      ref.setFocalLength(650);
   }}
>
   <OrbitControls enableZoom={false} enablePan={false} autoRotate />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[1, 2, 5]} />

{#await useGltf(model) then gltf}
   <T is={gltf.scene} />
{/await}
