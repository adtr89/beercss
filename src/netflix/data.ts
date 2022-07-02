import { Ref, ref } from "vue";
import { INetflix } from "./interfaces";

const data:INetflix = {
  todaysRanking: [
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
  ],
  series: [
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
  ],
  movies: [
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
  ],
  hot: [
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
  ],
  myList: [
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
  ],
  themes: [],
  theme: undefined,
  isDark: false,
  showCssVariables: false,
  isLoaded: false
}

const dataAsRef:Ref<INetflix> = ref(data);

export default dataAsRef;