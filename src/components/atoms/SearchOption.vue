<template>
    <v-container class="filter px-1">
        <v-flex v-if="!collapse" class="px-0">
          <v-btn class="pl-0 py-2 ma-0 btn btn--selector" sm6 v-on:click="collapse=true">{{currentFilter.optionName}}<v-icon right x-large class="pl-5">expand_more</v-icon></v-btn>
          <v-menu
            v-if="currentFilter.datePickerVisible"
            lazy
            :close-on-content-click="true"
            transition="scale-transition"
            :nudge-left="-8"
            :nudge-bottom="50"
            style="vertical-align: top;"
            class="px-2 mx-3 picker-date--object"
            sm6 >
            <v-date-picker v-model="selectedDate" scrollable no-title></v-date-picker>
            <v-text-field
              slot="activator"
              v-model="selectedDate"
              label="YYYY-MM-DD"
              append-icon="event"
              class="picker-date--text mb-1"
            ></v-text-field>
          </v-menu>
        </v-flex>
        <v-card class="pl-3 pr-4 filter--list" v-if="collapse">
            <v-layout row wrap class="py-2 filter--option" block>
              <span class="filter--option-title pl-1 pt-1">All years</span>
              <v-btn icon v-on:click="collapse=false" class="close-btn mr-1">
                <v-icon>close</v-icon>
              </v-btn>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last 24 hours'}" @click="setOption">Last 24 hours</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Exact date'}" @click="setOption">Exact date</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Date Range'}" @click="setOption">Date Range</v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last week'}" @click="setOption">Last week</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Exact 2 week'}" @click="setOption">Exact 2 week</v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last month'}" @click="setOption">Last month</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last 2 months'}" @click="setOption">Last 2 months</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last 3 months'}" @click="setOption">Last 3 months</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last 6 months'}" @click="setOption">Last 6 months</v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last year'}" @click="setOption">Last year</v-flex>
                <v-flex xs4 class="py-2" :class="{active: currentFilter.optionName == 'Last 2 years'}" @click="setOption">Last 2 years</v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      collapse: false,
      selectedDate: null,
    };
  },
  methods: {
    setOption(event) {
      if (event.target.innerHTML === 'Exact date') {
        this.$store.dispatch('setFilter', { optionName: event.target.innerHTML, datePickerVisible: true, selectedDate: this.selectedDate });
      } else {
        this.$store.dispatch('setFilter', { optionName: event.target.innerHTML, datePickerVisible: false });
      }
      this.collapse = false;
    },
  },
  watch: {
    selectedDate(newValue) {
      this.$store.dispatch('setDate', newValue);
    },
  },
  computed: {
    ...mapGetters({
      currentFilter: 'currentState',
    }),
  },
};
</script>
<style scoped lang="less">
@import '../../assets/styles/theme.less';
.filter {
  .btn.btn--selector{
    background-color: @background-grey;
    color: @selector-color;
    font-weight: 600;
    height: auto;
    text-transform: none;
    height: 44px;
  }
  .divider {
    background: @background-white;
  }
  .picker-date--text {
    overflow: hidden;
    width: 160px;
    height: 44px;
    margin-top: -4px;
    padding-top: 22px;
  }
  .picker-date--object {
    border: 1px solid;
    border-color: @background-grey;
  }
}

.filter--option{
  background-color: @background-grey;
  color: @selector-color;
  font-weight: lighter;
  .filter--option-title {
    font-weight: bold;
    text-transform: none;
  }
  .close-btn {
    color: @selector-color;
    position: absolute;
    top: 8px;
    right: 0;
    margin: 0;
    height: 24px;
    width: 24px;
  }

  .active {
    font-weight: bold;
  }
}

.filter--list {
  background-color: @background-grey;
}
</style>
