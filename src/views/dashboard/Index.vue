<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" :style="styleObject">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="user-panel">
                        <span class="user-photo">
                            <Icon type="person" size="40"></Icon>
                        </span>
                        <p class="user-name">超级管理员</p>
                    </div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="gear-b" :size="iconSize"></Icon>
                            <span class="layout-text">权限管理</span>
                        </template>
                        <Menu-item name="1-1">
                            <Icon type="person" :size="iconSize"></Icon>
                            <span class="layout-text">用户列表</span>
                        </Menu-item>
                        <Menu-item name="1-2">
                            <Icon type="person-stalker" :size="iconSize"></Icon>
                            <span class="layout-text">角色列表</span>
                        </Menu-item>
                        <Menu-item name="1-3">
                            <Icon type="navicon" :size="iconSize"></Icon>
                            <span class="layout-text">菜单列表</span>
                        </Menu-item>
                    </Submenu>
                    <Menu-item name="2">
                        <Icon type="edit" :size="iconSize"></Icon>
                        <span class="layout-text">修改密码</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <Row class="layout-header" type="flex" justify="center" align="middle">
                    <Col span="2">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                    </Col>
                    <Col span="19">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">权限管理</Breadcrumb-item>
                        <Breadcrumb-item>用户列表</Breadcrumb-item>
                    </Breadcrumb>
                    </Col>
                    <Col span="3" pull="1">
                    <Dropdown>
                        <span class="user-name">
                            超级管理员
                            <Icon type="arrow-down-b"></Icon>
                        </span>
                        <Dropdown-menu slot="list">
                            <div class="user-panel samll">
                                    <span class="user-photo">
                                        <Icon type="person" size="14"></Icon>
                                    </span>
                                <p class="user-name">超级管理员</p>
                            </div>
                            <Dropdown-item>
                                <Icon type="edit" :size="iconSize"></Icon>
                                <span class="layout-text">修改密码</span>
                            </Dropdown-item>
                            <Dropdown-item>
                                <Icon type="log-out" :size="iconSize"></Icon>
                                <span class="layout-text">退出</span>
                            </Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                    </Col>
                </Row>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <Row>
                            <label>
                                账号：
                                <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
                            </label>
                            <Button type="primary" shape="circle" icon="search">查询</Button>
                            <Button type="primary" shape="circle" icon="person-add">新增</Button>
                            <Button type="primary" shape="circle" icon="archive">导出</Button>
                        </Row>
                            <Table border :context="self" :columns="columns7" :data="data6"></Table>
                    </div>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script lang="babel">
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                value: '',

                self: this,
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],

                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],

                styleObject: {
                    height: document.documentElement.clientHeight + 'px'
                }
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
<style lang="css">
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        /*background: #fff;*/
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 15px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .user-panel {
        text-align: center;
        background-color: white;
        padding: 20px 0;
    }

    .user-name {
        white-space: nowrap;
    }

    .user-photo {
        border: 1px solid #333;
        border-radius: 40px;
        width: 80px;
        height: 80px;
        display: inline-block;
        position: relative;
        margin-bottom: 5px;
    }

    .user-photo i {
        transform: translateY(40%);
    }

    .user-panel.samll {
        background-color: #464c5b;
    }

    .user-panel.samll .user-photo {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border-color: white;
        color: white;
    }

    .user-panel.samll .user-name {
        font-size: 12px;
        color: white;
    }
</style>
