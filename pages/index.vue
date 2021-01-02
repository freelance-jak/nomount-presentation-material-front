<template>
  <div class="bg-white rounded-lg shadow-lg py-6">
    <div class="block overflow-x-auto mx-6">
      <h1 class="title">発表資料一覧</h1>
      <table class="w-full text-left rounded-lg">
        <thead>
          <tr class="text-gray-800 border border-b-0">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">名前</th>
            <th class="px-4 py-3">タイトル</th>
            <th class="px-4 py-3">発表日</th>
            <th class="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody
          v-for="presentationList in presentationState.list.PresentationList"
          :key="presentationList.id"
        >
          <tr
            class="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0"
          >
            <td class="px-4 py-4">{{ presentationList.id }}</td>
            <td class="px-4 py-4">{{ presentationList.name }}</td>
            <td class="px-4 py-4">
              {{ presentationList.title }}
            </td>
            <td class="px-4 py-4">{{ presentationList.presentation_date }}</td>
            <td class="px-4 py-4">
              <button
                class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                <span>Active</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
  reactive,
} from "@vue/composition-api";
import PresentationComposition from "@/composition/presentation/PresentationComposition";
import PresentationDataSources from "@/datasources/PresentationDataSources";
import { Presentation } from "../domain/entity/presentation";
import PresentationComposiotion from "../composition/presentation/PresentationComposition";

export default defineComponent({
  setup(_, { root }: SetupContext) {
    const Presentation = PresentationComposition();
    const presentationState = reactive({ list: [] });

    onMounted(() => {
      Presentation.loadPresentationList();
      presentationState.list = Presentation.allPresentationState;
    });

    //watchEffect(() => {console.log(presentationState)})

    return {
      presentationState,
    };
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
  font-size: 30px;
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
