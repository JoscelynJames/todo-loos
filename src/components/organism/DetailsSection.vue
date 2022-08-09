<script lang="ts">
// import StyledInput from "../atoms/StyledInput.vue";

export default {
  name: "DetailsSection",
  components: {
    // StyledInput
},
  props: {
    detailsHeader: String,
    titleLabel: String,
    titleInput: String,
    titleInputHint: String,
    descriptionLabel: String,
    descriptionInput: String,
    descriptionInputHint: String,
  },
  setup() {
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      filterOption,
    };
  },
};
</script>

<template>
  <section>
    <h4>{{ detailsHeader }}</h4>
    <StyledInput
      placeholder="Let's get shit done"
      :showLabel="true"
      :labelValue="titleLabel"
      :inputValue="titleInput"
      :hintValue="titleInputHint"
    ></StyledInput>

    <StyledTextArea
      placeholder="Type stuff"
      :showLabel="true"
      :labelValue="descriptionLabel"
      :inputValue="descriptionInput"
      :hintValue="descriptionInputHint"
      :autoSize="{ minRows: 4 }"
    ></StyledTextArea>
  </section>
</template>

<style lang="less">

</style>
