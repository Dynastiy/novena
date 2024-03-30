<script setup>
const getYear = new Date().getFullYear()
// import TwitterIcon from "@/components/icons/twitterIcon.vue";
</script>

<template>
  <footer class="bg-neutral-1100 mt-0 py-[72px] flex flex-col gap-[54px] lg:gap-[54px] text-white">
    <div class="container flex flex-col justify-center lg:justify-between gap-[34px] lg:gap-[34px]">
      <div class="">
        <!-- <img
          loading="lazy"
          src="@/assets/BrandLogos/WhiteLogo.svg"
          class="h-[40px] md:h-[47.53px] w-auto"
          alt=""
        /> -->
        <img loading="lazy" src="@/assets/img/brandLogoLight.png" class="w-44" alt="">
      </div>
      <div class="flex justify-between lg:flex-row flex-col">
        <div class="flex flex-col lg:flex-row gap-[58px] text-left justify-start w-full">
          <div class="lg:w-[40%]">
            <span class="text-[14px] font-normal lg:leading-[21.602px]">
              <!-- {{ $t("footer-text") }} -->
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas eaque, ut mollitia, amet distinctio suscipit voluptatum recusandae quae, dolorem ullam. Illo dolorem perspiciatis ipsam deleniti ad inventore dolore illum.
            </span>
          </div>
          <div>
            <h5 class="font-semibold text-gray-300 text-[18px] mb-[12px]">
              <!-- {{ $t("nav.contact-us") }} -->
              Get In Touch
            </h5>
            <ul class="flex flex-col lg:gap-[12px]">
              <!-- <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> info@croxxtalent.com </router-link>
              </li> -->

              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <span>Lorem? Aliquid dignissimos, maiores <br> nulla porro laborum? </span>
              </li>
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <a href="tel:0493302904">Tel: 123456789</a>
              </li>
            </ul>
          </div>
          <!-- <div>
            <h5 class="font-bold text-[14px] mb-[12px]">Location</h5>
            <ul class="flex flex-col lg:gap-[12px]">
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <span> E215/ 37 - 41 Bonnyrigg Avenue, <br />Bonnyrigg NSW 2177 </span>
              </li>
            </ul>
          </div> -->
        </div>
        <!-- <div class="flex flex-col gap-[18px] lg:w-[30%]">
          <h5 class="font-normal text-[14px] text-text-white-100">
            Subscribe to newsletter
          </h5>
          <div class="flex lg:flex-row flex-col relative">
            <img
              class="absolute left-[10px] bottom-[86px] lg:hidden block"
              src=""
              alt=""
            />

            <input
              v=""
              type="text"
              class="bg-[#FFFFFF]/[8%] outline-none p-4 lg:py-2 lg:px-4 px-12 border-[1px] lg:border-gray-0 border-[#FFFFFF]/[8%] lg:mb-0 mb-4 text-sm rounded-md w-full lg:rounded-r-none"
              placeholder="Your email"
            /><button
              class="bg-primary px-8 md:px-4 py-4 text-gray-800 text-[15px] font-normal rounded-[7px] lg:rounded-l-none"
            >
              Submit
            </button>
          </div>
          <div class="flex flex-row items-center gap-[15px]">
            <input
              type="checkbox"
              name=""
              id=""
              class="h-[20px] w-[20px] rounded-[4px] !bg-[#FFFFFF]/[8%] outline-none"
            />
            <label for="" class="flex items-center gap-1"
              >I agree to the
              <span class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> Privacy Policy.</router-link>
              </span>
            </label>
          </div>
        </div> -->
      </div>
    </div>
    <div class="flex flex-row container items-center justify-between gap-[29px]">
      <hr class="bg-[#FFFFFF40] h-[1px] lg:w-full w-[50%]" />
      <div class="flex flex-row items-center gap-[14px]">
        <!-- <TwitterIcon /><TwitterIcon /><TwitterIcon /><TwitterIcon /> -->
        <!-- <a href=""></a>
        <a href=""></a> -->
      </div>
      <hr class="bg-[#FFFFFF40] h-[1px] lg:w-full w-[50%]" />
    </div>
    <div class="flex lg:flex-row flex-col container lg:text-justify text-center justify-between">
      <!-- <div>
            <h5 class="font-bold text-[14px] mb-[12px]">Sitemap</h5>
            <ul class="flex flex-col lg:gap-[12px]">
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> Products </router-link>
              </li>
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> Resources </router-link>
              </li>
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> Dealers </router-link>
              </li>
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to=""> Contacts </router-link>
              </li>
              <li class="text-[14px] font-normal lg:leading-[21.602px]">
                <router-link to="/about"> About </router-link>
              </li>
            </ul>
          </div> -->
      <p class="my-2 font-normal text-[14px] text-[#FFFFFF7A]">{{ $t("nav.copyright") }} {{ getYear }} &copy; Novena Educational Consult. {{ $t("nav.rights") }}.</p>
    </div>
  </footer>
</template>
