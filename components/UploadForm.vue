<template>
    <form enctype="multipart/form-data" @submit.prevent="submit">
        <h1 class="title text-gray-900">発表資料アップロード</h1>
        <ValidationProvider v-slot="{ errors }" name="名前" rules="required">
            <label for="name" class="block text-xs font-semibold text-gray-900 uppercase">
                名前
            </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="xxxxxx"
                autocomplete="given-name"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                v-model="state.name"
            />
            <span class="text-red-600">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="タイトル" rules="required">
            <label
                for="title"
                class="block mt-2 text-xs font-semibold text-gray-900 uppercase"
                >タイトル</label
            >
            <input
                id="title"
                type="text"
                name="title"
                placeholder="xxxxxx"
                autocomplete="title"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                v-model="state.title"
            />
            <span class="text-red-600">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="発表日" rules="required">
            <label
                for="date"
                class="block mt-2 text-xs font-semibold text-gray-900 uppercase"
            >
                発表日
            </label>
            <input
                id="date"
                type="date"
                name="date"
                autocomplete="date"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                
                v-model="state.presentation_date"
            />
            <span class="text-red-600">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="発表資料" rules="required">
            <label
                for="file"
                class="block mt-2 text-xs font-semibold text-gray-900 uppercase"
                >発表資料</label
            >
            <input
                id="file"
                type="file"
                name="file"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                v-on:change="fileSelected"
            />
            <span class="text-red-600">{{ errors[0] }}</span>
        </ValidationProvider>
        <button
            type="submit"
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-900 shadow-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
            Upload
        </button>
        <nuxt-link to="/" class="underline ...">TOPへ戻る</nuxt-link>
    </form>
</template>

<script lang="ts">
import { reactive, ref, SetupContext, computed } from "@vue/composition-api";
import PresentationComposiotion from "@/composition/presentation/PresentationComposition";

export default {
    setup(_, { root }: SetupContext) {
        const state = ref({
            name: "",
            title: "",
            presentation_date: "",
            upload_file: null,
        });

        function fileSelected(event: any) {
            state.value.upload_file = event.target.files[0];
        }

        async function submit() {
            await PresentationComposiotion().postPresentationList(state);
        }

        return {
            state,
            fileSelected,
            submit,
        };
    },
};
</script>

<style>
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
    letter-spacing: 1px;
    padding-bottom: 30px;
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