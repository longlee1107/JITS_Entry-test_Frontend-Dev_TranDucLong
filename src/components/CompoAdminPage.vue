<template>
  <div>
    <!-- Header -->
    <div class="fixed w-full flex items-center justify-between h-14 text-white z-50">
      <div
        class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none"
      >
        <img
          class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="@/assets/logo.png"
        />
      </div>
      <div
        class="flex justify-end items-center h-14 bg-blue-800 dark:bg-gray-800 header-right"
      >
        <ul class="flex my-auto items-center">
          <router-link to="#">
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 dark:text-blue-50 text-blue-600 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- ./Header -->
    <!--Sidebar-->
    <div
      class="absolute flex flex-col top-14 left-0 w-14 overflow-y-auto hideScroll hover:w-64 md:w-64 bg-white h-full transition-all duration-300 border-none z-10 sidebar"
    >
    <a-menu
      mode="inline" class=""
    >
      <template v-for="item in sideBarList" >
        <a-menu-item v-if="!item.haveSubMenu" :key="item.rootSubmenuKey">
          <span>{{ item.name }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.rootSubmenuKey" :menu-info="item" />
      </template>
    </a-menu>
    </div>
    <!--Sidebar-->
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue';
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.rootSubmenuKey" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.subMenu">
          <a-menu-item v-if="!item.haveSubMenu" :key="item.rootSubmenuKey">
            <span>{{ item.name }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.rootSubmenuKey" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: [],
      listSubmenuKey:[],
      sideBarList: [
        {
          name: "Home",
          rootSubmenuKey: "home",
          routerLink: "/",
          haveSubMenuL: false,
        },
        {
          name: "Contract",
          rootSubmenuKey: "contract",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            {
              name: "Contract list",
              rootSubmenuKey: "contract-list",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Create new contract",
              rootSubmenuKey: "create-new-contract",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Approve contract",
              rootSubmenuKey: "approve-contract",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Approve user",
              rootSubmenuKey: "approve-user",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Unblock contract",
              rootSubmenuKey: "unblock-contract",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Unblock user",
              rootSubmenuKey: "unblock-user",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Reset pin/ password",
              rootSubmenuKey: "reset-password",
              routerLink: "#",
              haveSubMenu: false,
            },
          ],
        },
        {
          name: "Fee management",
          rootSubmenuKey: "fee-management",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            { name: "Set fee", routerLink: "#", haveSubMenu: false },
            {
              name: "Transaction fee ",
              routerLink: "#",
              haveSubMenu: true,
              subMenu: [
                {
                  name: "Product fee",
                  rootSubmenuKey: "product-fee",
                  routerLink: "#",
                },
                {
                  name: "Contract fee",
                  rootSubmenuKey: "contract-fee",
                  routerLink: "#",
                },
                { name: "OTC fee", rootSubmenuKey: "otc-fee", routerLink: "#" },
              ],
            },
            { name: "Set fee share", routerLink: "#", haveSubMenu: false },
          ],
        },
        {
          name: "Limit management",
          rootSubmenuKey: "limit-management",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            {
              name: "Product limit",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Contract limit",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Wallet balance limit",
              routerLink: "#",
              haveSubMenu: false,
            },
          ],
        },
        {
          name: "Transaction",
          rootSubmenuKey: "transaction",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            {
              name: "Transaction history",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Top Up to E-wallet",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Withdrawal from E-wallet",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Cash back ",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Payroll",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Admin transaction",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "Reversal transaction",
              routerLink: "#",
              haveSubMenu: false,
            },
          ],
        },
        {
          name: "System",
          rootSubmenuKey: "system",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            {
              name: "Group management",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "User management",
              routerLink: "#",
              haveSubMenu: false,
            },
            {
              name: "System parameter",
              routerLink: "#",
              haveSubMenu: false,
            },
          ],
        },
        {
          name: "Report",
          rootSubmenuKey: "report",
          routerLink: "#",
          haveSubMenu: true,
          subMenu: [
            {
              name: "Report List",
              routerLink: "#",
              haveSubMenu: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      console.log("openKey", openKeys);
      const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1);
      console.log("latestOpenKey", latestOpenKey);
      this.sideBarList.forEach(item =>{
        console.log(item.rootSubmenuKey);
        this.listSubmenuKey.push(item.rootSubmenuKey)
      })
      if (this.listSubmenuKey.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
        console.log("this.openKeys", this.openKeys);
        console.log("latestOpenKey", latestOpenKey);
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        console.log("this.openKeys", this.openKeys);
        console.log("latestOpenKey", latestOpenKey);
      }
    },
  },
};
</script>

<style scoped src="../assets/css/pageAdmin.css"></style>
