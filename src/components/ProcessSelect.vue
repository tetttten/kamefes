<template>
  <div>
    <div class="processIndication">
      <div v-for="process in sortedDisplayedList" :key="process.abbreviation" class="processIndicationItem">
        {{ process.abbreviation }}
        <span @click="removeProcess(process)">×</span>
      </div>
    </div>
  </div>
  <div class="dropdown" @click="toggleProcessList">
    <span>{{ dropdownLabel }}</span>
    <ul class="processList" v-show="showProcessList">
      <li v-for="process in filteredList" :key="process.abbreviation" @click="displayProcess(process)">
        {{ process.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';

interface Process {
  name: string;
  abbreviation: string;
  number: number;
}

export default {
  setup() {
    const list = ref<Process[]>([
      { name: 'VP 情報化構想立', abbreviation: 'VP', number: 1 },
      { name: 'SP システム化計画', abbreviation: 'SP', number: 2 },
      { name: 'RD システム要件定義', abbreviation: 'RD', number: 3 },
      // 他のプロセスのデータ
    ]);

    const displayedList = ref<Process[]>([]);

    const displayProcess = (process: Process): void => {
      if (!isDisplayed(process)) {
        displayedList.value.push(process);
        list.value = list.value.filter((p) => p !== process);
      }
    };

    const filteredList = computed(() => {
      return sortedList.value.filter((process) => !isDisplayed(process));
    });

    const removeProcess = (process: Process): void => {
      displayedList.value = displayedList.value.filter((p) => p !== process);
      list.value.push(process);
    };

    const isDisplayed = (process: Process): boolean => {
      return displayedList.value.includes(process);
    };

    const sortedList = computed(() => {
      const copiedList = [...list.value];
      return copiedList.sort((a, b) => a.number - b.number);
    });

    const sortedDisplayedList = computed(() => {
      const copiedDisplayedList = [...displayedList.value];
      return copiedDisplayedList.sort((a, b) => a.number - b.number);
    });

    const showProcessList = ref(false);

    const toggleProcessList = (): void => {
      showProcessList.value = !showProcessList.value;
    };

    const dropdownLabel = computed(() => {
      return showProcessList.value ? '▲' : '▼';
    });

    return {
      displayedList,
      displayProcess,
      removeProcess,
      isDisplayed,
      filteredList,
      sortedDisplayedList,
      showProcessList,
      toggleProcessList,
      dropdownLabel
    };
  }
};
</script>

<style>
.processList {
  width: 600px;
  height: 300px;
  overflow: scroll;
  padding-left: 10px;
  border: 1px solid black;
  margin-top: 10px;
}

.processList li {
  list-style: none;
  cursor: pointer;
}

.processList li:hover {
  background-color: #e7e7e7;
}

.processIndication {
  white-space: nowrap;
  width: 600px;
  overflow-x: scroll;
  border: 1px solid #000000;
  padding: 5px;
}

.processIndicationItem {
  display: inline-block;
  background-color: #eeeded;
  cursor: pointer;
  margin-bottom: 5px;
  width: 110px;
  border-radius: 5px;
  padding: 3px 10px;
  position: relative;
  margin-right: 5px;
  font-size: 20px;
}

.processIndicationItem:hover {
  background-color: #e2e2e2;
}

.processIndicationItem span {
  position: absolute;
  right: 5px;
  padding: 0 5px;
}

.processIndicationItem span:hover {
  background-color: #c0bfbf;
}

.dropdown span:hover {
  cursor: pointer;
}
</style>
