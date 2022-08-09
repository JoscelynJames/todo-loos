<script lang="ts">

export default {
  name: "Chip",
  props: {
    rounded: Boolean,
    color: String,
    text: String,
  }
};
</script>

<template>
  <div 
    class="chip pointer" 
    :class="{ 
      rounded: rounded, 
      purple: color === 'purple', 
      green: color === 'green', 
      yellow: color === 'yellow', 
      orange: color === 'orange', 
      red: color === 'red', 
      blue: color === 'blue', 
    }">
    {{ text }}
    </div>
</template>

<style lang="less">
.chip {
  font-size: 12px;
  height: 32px;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 6px;
  margin: 16px;
  min-width: 32px;
  text-align: center;
}

.rounded {
  border-radius: 16px;
  padding-inline: 8px;
  margin: 12px 6px;
}

h5 {
  margin: auto;
}

.purple {
  background-color: #424867;
  color: #FFFFFF;

  h5 {
    color: #FFFFFF;
  }
}

.green {
  background-color: #BBF7D0;
  color: #16A34A;

  h5 {
    color: #16A34A;
  }
}

.yellow {
  background-color: #FEF08A;
  color: #CA8A04;

  h5 {
    color: #CA8A04;
  }
}

.orange {
  background-color: #FED7AA;
  color: #EA580C;

  h5 {
    color: #EA580C;
  }
}

.red {
  background-color: #FECACA;
  color: #DC2626;

  h5 {
    color: #DC2626;
  }
}

.blue {
  background-color: #A5F3FC;
  color: #0891B2;

  h5 {
    color: #0891B2;
  }
}
</style>
