<template>
  <main>
    <header
      class="
        lg:px-5
        h-[72px]
        flex items-center
      "
    >
      <div class="flex items-center gap-2">
        <div class="relative">
          <div class="exact-wh-[50px] overflow-hidden rounded-full">
            <img
              class="object-cover"
              src="https://images.pexels.com/photos/15186505/pexels-photo-15186505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            >
          </div>

          <div class="exact-wh-[10px] bg-green-400 absolute bottom-[2px] right-[2px] rounded">
          </div>
        </div>

        <h1 class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
          Jeash
        </h1>
      </div>
    </header>
    <div class="px-5">
      <RouterView />
    </div>
  </main>
</template>
