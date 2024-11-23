import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});