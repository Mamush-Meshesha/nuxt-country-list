<script lang="ts" setup>
import { computed } from "vue";
const searchQuery = ref("");
const valu = gql`
  query countries {
    countries {
      name
      capital
      code
      languages {
        name
      }
    }
  }
`;

const { data } = await useAsyncQuery(valu);
const filteredCountries = computed(() => {
  if (!data.value) {
    return [];
  }
  const query = searchQuery.value.toLowerCase();
  return data.value.countries.filter((country) =>
    country.name.toLowerCase().includes(query)
  );
});
</script>
<template>
  <div class="bg-[#041c20] rounded-md">
    <div class="flex w-screen h-screen overflow-x-hidden justify-center">
      <div>
        <h1
          class="text-4xl text-black-600 capitalize bg-gradient-to-r from-[#47eaed] via-[#ed47ea] to-[#6eed47] inline-block text-transparent bg-clip-text"
        >
          This is graphQL with hasura and nuxt 3 the first app
        </h1>
        <div class="gr">
          <div>
            <input
              class="my-4 p-2 rounded-md w-full h-12"
              v-model="searchQuery"
              type="text"
              name=""
              id=""
              placeholder="search countries"
            />
          </div>
          <div class="grid grid-cols-4">
            <div
              v-for="country in filteredCountries"
              :key="country.name"
              class="justify-center flex"
            >
              <div
                class="w-[406px] h-[306px] my-5 mx-5 bg-gradient-to-b from-[#9351ae] via-[#619e72] to-[#623014] shadow-xl rounded-md"
              >
                <div class="flex justify-center items-center mt-[3px]">
                  <div class="w-[400px] h-[300px] bg-[#222a2f] rounded-md">
                    <div class="p-5">
                      <div>
                        <span
                          class="font-bold text-xl capitalize py-3 bg-gradient-to-r from-[#47eaed] via-[#ed47ea] to-[#6eed47] inline-block text-transparent bg-clip-text"
                          >name:
                          {{ country.name }}
                        </span>
                      </div>
                      <div class="text-white">
                        <div>
                          <span class="font-bold text-xl capitalize py-3"
                            >code:</span
                          >
                          {{ country.code }}
                        </div>
                        <div>
                          <span class="font-bold text-xl capitalize py-3"
                            >capital:
                            {{ country.capital }}
                          </span>
                        </div>
                        <div
                          v-for="inner in country.languages"
                          :key="inner.name"
                        >
                          <span class="font-bold text-xl capitalize py-3"
                            >language:
                            {{ inner.name }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
