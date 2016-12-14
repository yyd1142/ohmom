<template>
    <div id="header">
        <nav class="header-view">
            <div class="header-warp">
                <div class="header-logo"></div>
                <ul class="header-table-view">
                    <li class="header-table-cell" :class="item.active" v-for="(item, index) in headItems" @click="tab(item, index)">
                        <a v-text="item.title"></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script type="text/javascript">
var headItems = [{name: 'home', active: 'home-active', url: '/#top', title: '首页'},
{name: 'product', active: '', url: '/#product', title: '作品'},
{name: 'skill', active: '', url: '/#skill', title: '技能'},
{name: 'about', active: '', url: '/#about', title: '关于我'}];
export default {
    data() {
        return {
            headItems: headItems
        }
    },
	methods: {
		tab(item, index){
			let self = this;
			this.headItems.forEach(function(obj){
				if(self.headItems.indexOf(obj) == index){
					obj.active = 'home-active';
				}else{
					obj.active = '';
				}
			});
			window.location.href = item.url;
		}
	}
}
</script>