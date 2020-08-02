<template> 
<div>
  <a id="show-sidebar" class="btn btn-sm btn-light">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <router-link :to="{name: 'Index.Index'}">便利ツール</router-link>
        <div id="close-sidebar">
          <i class="fas fa-times"></i> 
        </div>
      </div>
      <!-- sidebar-header  -->
      <div class="sidebar-menu">
        <ul style="list-style:none;">
          <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar-dropdown"> 
            <a style="cursor: pointer;">
              <i class="fa fa-book "></i>
              <span>BASE64</span>
            </a>
             <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link :to="{name: 'Base64.Index'}">
                    <span @click="closeSideber()">
                      <i class="fa fa-book "></i>
                      <span>エンコード / デコード</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li> 
            <router-link :to="{name: 'SampleString.Index'}">
              <i class="fa fa-book "></i>
              <span>文字列生成</span>
            </router-link>
          </li>
          <li> 
            <router-link :to="{name: 'StrCount.Index'}">
              <i class="fa fa-book "></i>
              <span>文字数カウント</span>
            </router-link>
          </li>

          <li class="sidebar-dropdown"> 
            <a style="cursor: pointer;">
              <i class="fa fa-book "></i>
              <span>URL</span>
            </a>
             <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link :to="{name: 'UrlEncode.Index'}">
                    <span @click="closeSideber()">
                      <i class="fa fa-book "></i>
                      <span>エンコード / デコード</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="sidebar-dropdown"> 
            <a style="cursor: pointer;">
              <i class="fa fa-book "></i>
              <span>JSON</span>
            </a>
             <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link :to="{name: 'Json.Index'}">
                    <span @click="closeSideber()">
                      <i class="fa fa-book "></i>
                      <span>エンコード / デコード</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li> 
            <router-link :to="{name: 'Qr.Index'}">
              <i class="fa fa-book "></i>
              <span>QRコード</span>
            </router-link>
          </li>

          <!-- <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a> 
                </li>
                <li>
                  <a href="#">Dashboard 2</a>
                </li>
                <li>
                  <a href="#">Dashboard 3</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="header-menu"> 
            <span>Extra</span>
          </li>
          <li> 
            <a href="#">
              <i class="fa fa-book"></i>
              <span>Documentation</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-calendar"></i>
              <span>Calendar</span>
            </a>
          </li> -->
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <!-- sidebar-content  -->
    <!-- sidebar-footer  -->
    <!-- <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div> -->
  </nav>
</div>
</template>
<script>
export default {
  mounted:function () {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });

    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
    $(function() {
      if (992 >= window.innerWidth) {
        // 画面サイズがPC(992px)以上のときだけたたむ
        $(".page-wrapper").removeClass("toggled");
      }
    });
  },
  methods: {
    closeSideber () {
      if (992 >= window.innerWidth) {
        // 画面サイズがPC(992px)以上のときだけたたむ
        $(".page-wrapper").removeClass("toggled");
      }
    },
  },
  computed: {
  }
}
</script>