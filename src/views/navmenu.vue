<template>
    <div>
        <el-menu
                :default-active="1"
                :router="true"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#21305E"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>

            <el-submenu index="/">
                <template slot="title">策略研究</template>
                <el-menu-item index="/view/factorlib/list">因子看板</el-menu-item>
                <el-menu-item index="/">单因子分析</el-menu-item>
            </el-submenu>


            <el-menu-item index="/view/factorlib/universe" >智能股票池</el-menu-item>

            <el-menu-item index="/one" >可视化示例</el-menu-item>
        </el-menu>
        <div style="padding:20px; background: #F7F7F7">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "navmenu",
        data() {
            return {

            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>