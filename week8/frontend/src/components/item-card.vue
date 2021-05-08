<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'ItemCard',
  props: ['type', 'item'],
  components: {
  },
  data () {
    return {
      clicked:false
    }
  },
  methods: {
    ...mapActions(['choosePhone','removePhone','rmvPlatform','downloadApp']),
    removeItem () {
      this.type === 'phone' ? this.removePhone(this.item._id) : this.rmvPlatform(this.item._id)
    },
    itemUrl() {
      return `/${this.type}s/${this.item._id}`
    }
  }
}
</script>

<template lang='pug'>
article(class="card" :class="this.type")
  header(class="card-header")
    router-link(:to='itemUrl()' class='card-header-title') {{ item.name }}
    button(class='delete is-medium' @click="removeItem()") X

  div(class="card-content")
    div(v-if="this.type == 'phone'" class="content")
      img(:src='`https://picsum.photos/250/150?random=${item._id}`', alt='phone' class='img')
      div(class="current-apps")
        div(v-if="item.apps.length")
              h6( class="subtitle") Current Apps: 
              p(v-for="app in item.apps" class="tag is-success is-light") {{ app.name }} ✓
        div(v-else)
            p(class="no-app") No apps downloaded yet.
      button(@click='choosePhone(`${item._id}`); $router.push("/apps")' class="button is-success is-outlined") Select an app for {{item.name}}
    div(v-if="this.type == 'app'")
      button(class='button is-success is-outlined' @click='downloadApp(`${item._id}`)') Download
</template>

<style>
.card {
  width:25%;
  margin: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height:420px;
}
.card-header{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app {
  height: 150px !important;
}
.no-app {
  padding: 50px 0;
}
@media screen and (max-width: 600px) {
  .card {
      width:100%;
  }
}
.card-content {
  width:100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.current-apps {
  height: 125px;
}

.delete {
top:10px;
right: 5px;
}

.tag.is-success.is-light {
  display: block;
  width: 50%; 
  margin:auto;
  margin-top: 2px;
}

</style>