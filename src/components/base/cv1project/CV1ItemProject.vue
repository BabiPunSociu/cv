<template>
  <div class="item-project">
    <div class="flex">
      <!-- Tên dự án -->
      <div class="item-project__name">{{ project.projectName }}</div>
      <!-- Thời gian bắt đầu - Thời gian kết thúc -->
      <div class="item-project__time">
        {{ project.start ?? "" }} - {{ project.end ?? "Now" }}
      </div>
    </div>

    <!-- Vị trí tham gia -->
    <!-- <div class="item-project__position">
      {{ this.$resource[this.$lang].project.positionTitle }} :
      {{ project.position }}
    </div> -->

    <div class="item-project__content">
      <ul class="content">
        <!-- Số thành viên tham gia -->
        <!-- <li class="item-content">{{ project.content.memberNumber }}</li> -->

        <!-- Công nghệ sử dụng -->
        <li class="item-content">{{ project.content.technique }}</li>

        <!-- Điểm số -->
        <!-- <li class="item-content">{{ project.content.score }}</li> -->

        <!-- Chức năng chính -->
        <li class="item-content">
          <span>{{ project.content.mainTask.title }}</span>
          <ul class="main-task">
            <li
              class="item-task"
              v-for="task in project.content.mainTask.tasks"
              :key="task"
            >
              {{ task }}
            </li>
          </ul>
        </li>
        <!-- Link github -->
        <li class="item-content github">
          {{ this.$resource[this.$lang].linkGithubTitle }}
          <a :href="project.github" target="_blank">{{ project.github }}</a>
        </li>

        <!-- Link demo -->
        <li class="item-content demo" v-if="project.demo ?? false">
          {{ this.$resource[this.$lang].linkDemoTitle }}
          <!-- Có link demo -->
          <a
            v-if="project.demo ?? false"
            :href="project.demo"
            target="_blank"
            >{{ demo }}</a
          >
          <!-- Không có link demo -->
          <span v-else>{{ this.$resource[this.$lang].notAvailable }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1ItemProject",
  props: {
    /**
     * Đối tượng project cần hiển thị
     */
    project: {
      type: Object,
      required: true,
    },
  },
  created() {
    // console.log(this.project);
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-item-project.scss);
</style>
