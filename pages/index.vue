<template>
  <div class="container">
    <div>
      <h1 class="title">発表資料一覧</h1>
      <article class="p-4 flex space-x-4">
        <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
          <div v-for="presentationList in presentationState.list.PresentationList" :key="presentationList.id"> 
            <h2  class="text-lg font-semibold text-black mb-0.5 bg-green-100 text-left">
                {{ presentationList.id }}
            </h2>
            <dl class="flex flex-wrap text-xl font-medium whitespace-pre">
              <div class="bg-red-100">
                <dd>
                  {{ presentationList.name }}
                </dd>
              </div>
              <div class="flex w-full mt-0.5 font-normal bg-blue-100">
                <dt class="text-left">By </dt>
                <dd class="text-black">{{ presentationList.email }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  ref,
  onMounted,
  computed,
  watch,
  watchEffect,
  reactive
} from "@vue/composition-api";
import PresentationComposition from "@/composition/presentation/PresentationComposition";
import PresentationDataSources from "@/datasources/PresentationDataSources";
import axios from "axios";
import { Presentation } from '../domain/entity/presentation';
import PresentationComposiotion from '../composition/presentation/PresentationComposition';

export default defineComponent({
  setup(_, { root }: SetupContext) {
    const Presentation = PresentationComposition();
    const presentationState = reactive({list: []});
    
    onMounted(() => {
      Presentation.loadPresentationList();
      presentationState.list = Presentation.allPresentationState;
    });

    //watchEffect(() => {console.log(presentationState)})
    
    return {
      presentationState
    }
  },
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
