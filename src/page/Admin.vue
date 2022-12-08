<template>
  <div>
    <CompoAdminPage />
    <div x-data="setup()" class="">
      <div
        class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black"
      >
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <!-- Statistics Cards -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 p-4 gap-6"
          >
            <div class="grid grid-cols-3">
              <span>Request No</span>
              <input
                class="h-[70%] col-start-2 col-end-4 px-1.5 py-1 text-black border border-black rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="grid grid-cols-3">
              <span>Request Time</span>
              <input
                class="h-[70%] col-start-2 col-end-4 px-1.5 py-1 text-black border border-black rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="text-center">
              <button class="border border-black rounded-lg px-3 py-1.5">Search</button>
            </div>
            <div class="grid grid-cols-3">
              <span>Debit account</span>
              <input
                class="h-[70%] col-start-2 col-end-4 px-1.5 py-1 text-black border border-black rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="grid grid-cols-3">
              <span>Approval date</span>
              <input
                class="h-[70%] col-start-2 col-end-4 px-1.5 py-1 text-black border border-black rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="col-start-1 row-start-3 grid grid-cols-3 h-[70%]">
              <span>Status</span>
              <select name="" class="text-black border-black border rounded-md" id="">
                <option value="ALL">ALL</option>
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="FAILED">FAILED</option>
                <option value="INCOMPLETED">INCOMPLETED</option>
              </select>
            </div>
            <div class="col-start-1 row-start-4">
              <label for="inputFile" class="border border-black rounded-lg px-3 py-1.5">
                Upload File
              </label>
              <input
                type="file"
                id="inputFile"
                class="hidden"
                ref="fileInput"
                accept="*"
              />
            </div>
          </div>
          <!-- ./Statistics Cards -->

          <!-- Client Table -->
          <div class="mt-4 mx-4 text-black">
            <a-table
              bordered
              :columns="columns"
              :loading="tblLoading"
              :data-source="orderData"
              @change="onTblChange"
              :scroll="{ x: 1300 }"
              :customRow="this.customRow"
              :pagination="this.pageConfig"
            >
            </a-table>
          </div>
          <!-- ./Client Table -->
        </div>
      </div>
    </div>
    <CarouselImg :imgList="imgList"/>
    <Footer/>
  </div>
</template>

<script>
import CarouselImg from "@/components/CarouselImg";
import CompoAdminPage from "@/components/CompoAdminPage";
import Footer from "@/components/Footer";
import { Axios } from "@/service/Axios";

export default {
  components: {
    CompoAdminPage,
    CarouselImg,
    Footer
  },
  data() {
    return {
      imgList: [
        {
          id: 0,
          author: "Alejandro Escamilla",
          width: 5000,
          height: 3333,
          url: "https://unsplash.com/photos/yC-Yzbqy7PY",
          download_url: "https://picsum.photos/id/0/5000/3333",
        },
        {
          id: 1,
          author: "Alejandro Escamilla",
          width: 5000,
          height: 3333,
          url: "https://unsplash.com/photos/LNRyGwIJr5c",
          download_url: "https://picsum.photos/id/1/5000/3333",
        },
        {
          id: 2,
          author: "Alejandro Escamilla",
          width: 5000,
          height: 3333,
          url: "https://unsplash.com/photos/N7XodRrbzS0",
          download_url: "https://picsum.photos/id/2/5000/3333",
        },
        {
          id: 3,
          author: "Alejandro Escamilla",
          width: 5000,
          height: 3333,
          url: "https://unsplash.com/photos/Dl6jeyfihLk",
          download_url: "https://picsum.photos/id/3/5000/3333",
        },
      ],
      orderData: [
        {
          number: 123456,
          name: "Jack",
          approvedAt: "2014-12-24 24:00:00",
          numberAccount: "0001010200027395",
          totalPrices: "60000",
          createdAt: "2014-12-24 23:12:00",
          approverName: "July",
          text: "",
          status: "COMPLETED",
        },
        {
          number: 123122,
          name: "June",
          approvedAt: "2014-12-20 12:00:00",
          numberAccount: "0001010200024445",
          totalPrices: "60000",
          createdAt: "2014-12-19 23:12:00",
          approverName: "July",
          text: "",
          status: "FAILED",
        },
        {
          number: 321222,
          name: "bichdtn",
          approvedAt: "2014-12-24 24:00:00",
          numberAccount: "0022010200027395",
          totalPrices: "60000",
          createdAt: "2014-12-24 23:12:00",
          approverName: "July",
          text: "",
          status: "COMPLETED",
        },
        {
          number: 123456,
          name: "Jack",
          approvedAt: "2014-12-24 24:00:00",
          numberAccount: "0001010200027395",
          totalPrices: "60000",
          createdAt: "2014-12-24 23:12:00",
          approverName: "July",
          text: "",
          status: "INCOMPLETED",
        },

        {
          number: 321222,
          name: "bichdtn",
          approvedAt: "2014-12-24 24:00:00",
          numberAccount: "0022010200027395",
          totalPrices: "60000",
          createdAt: "2014-12-24 23:12:00",
          approverName: "July",
          text: "",
          status: "COMPLETED",
        },
        {
          number: 123456,
          name: "Jack",
          approvedAt: "2014-12-24 24:00:00",
          numberAccount: "0001010200027395",
          totalPrices: "60000",
          createdAt: "2014-12-24 23:12:00",
          approverName: "July",
          text: "",
          status: "INCOMPLETED",
        },
      ],
      columns: [
        {
          title: "Request No",
          dataIndex: "number",
          align: "center",
        },
        {
          title: "Request Time",
          dataIndex: "createdAt",
          align: "center",
        },
        {
          title: "Created user",
          dataIndex: "name",
          align: "center",
        },
        {
          title: "Approval time",
          dataIndex: "approvedAt",
          align: "center",
        },
        {
          title: "Debit account",
          dataIndex: "numberAccount",
          align: "center",
        },
        {
          title: "Amount",
          dataIndex: "totalPrices",
          align: "center",
        },
        {
          title: "Approver",
          dataIndex: "approverName",
          align: "center",
        },
        {
          title: "Reason to reject",
          dataIndex: "text",
          align: "center",
        },
        {
          title: "Status",
          dataIndex: "status",
          align: "center",
        },
      ],
      pageConfig: {
        current: 1,
        defaultCurrent: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped src="../assets/css/pageAdmin.css"></style>
