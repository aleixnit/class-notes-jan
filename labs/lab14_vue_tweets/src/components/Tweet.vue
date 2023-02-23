<template>
  <div class="tweet">
      <ProfileImage :src="props.tweet.user.image"/>

      <div class="body">
          <div class="top">
             <User :name="props.tweet.user.name" :handle="props.tweet.user.handle" />
              <Timestamp :timestamp="props.tweet.timestamp" />
          </div>

         <Message :message="props.tweet.message" />

          <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<script setup>
import { defineProps } from "vue";
import Timestamp from "./Timestamp.vue";
import User from "./User.vue";
import ProfileImage from "./ProfileImage.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";
const props = defineProps(["tweet"]);
</script>