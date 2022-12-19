<template>
  <main class="content">
    <div class="favorite-list">

  <FavoritePlaylists/>
    </div>
    <h1>لیست های پخش</h1>
    <section class="playlists">
      <PlaylistCard
        v-for="item in playlists"
        :key="item.playlist-id"
        :playlist-name="item.name"
        :playlist-image="item.image"
        :playlist-author="item.creator"
        :playlist-id="item.playlist-id"
      />
    </section>
  </main>
</template>

<script >
import PlaylistCard from "../components/PlaylistCard.vue";
import FavoritePlaylists from "../components/FavoritePlaylists.vue"
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      playlists:[
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        },
        {name:"مهام",
        image:"Rectangle 14.svg",
        creator:"ایهام",
        
        }
      ]
    };
  },
  computed: {
    ...mapState("playlist", ["playlists"]),
  },
  methods: {
    ...mapActions("playlist", ["get"]),
  },
  mounted(){
    this.get()
    console.log(this.playlists);
  },
  
    
  components:{
   PlaylistCard,
   FavoritePlaylists
  }
}


</script>

<style>
.favorite-list{
  display: none;
}
.playlists {
  display: flex;
  flex-wrap: wrap;
  padding: 24px 32px;
  gap: 1em;
  background-color: rgba(70, 70, 70, 0.4);
  border-radius: 16px;
}
h1 {
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
}

template {
  display: inline;
}

.more-icon {
  rotate: 90deg;
}
@media only screen and (max-width: 768px) {
  .favorite-list{
    display: block;
  }
  .content {
    width: 100%;
  }
  .playlists {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 24px 32px;
    gap: 1em;
    background-color: rgba(70, 70, 70, 0.4);
    border-radius: 0;
  }
}
</style>
