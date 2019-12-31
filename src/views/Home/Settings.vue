<template>
  <div class="settings">
    <!-- User Details -->
    <ValidationObserver ref="userDetails" v-slot="{ invalid, validated, passes, validate }">
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-divider />
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <TextField v-model="adminName" rules="required" :loading="isUserDetailsFormLoading" label="Admin Name" />
            </v-col>
            <v-col cols="4">
              <TextField v-model="firmName" rules="required" :loading="isUserDetailsFormLoading" label="Firm Name" />
            </v-col>
            <v-col cols="4">
              <TextField
                v-model="gstNumber"
                rules="required|length:15|alpha_num"
                :loading="isUserDetailsFormLoading"
                label="GST Number"
              />
            </v-col>
            <v-col cols="4">
              <TextField v-model="email" rules="required|email" :loading="isUserDetailsFormLoading" label="Email" />
            </v-col>
            <v-col cols="4">
              <TextField
                v-model="mobile"
                rules="required|integer"
                :loading="isUserDetailsFormLoading"
                label="Contact No(Mobile)"
              />
            </v-col>
            <v-col cols="4">
              <TextField
                v-model="landline"
                rules="required|integer"
                :loading="isUserDetailsFormLoading"
                label="Contact No(landline)"
              />
            </v-col>
            <v-col cols="6">
              <TextArea v-model="address" rules="required" :loading="isUserDetailsFormLoading" label="Address" />
              <v-row>
                <v-col cols="6">
                  <TextField v-model="invoiceCopies" rules="integer" label="Number of Invoice Copies" />
                </v-col>
                <v-col cols="6">
                  <TextField v-model="chalanCopies" rules="integer" label="Number of Chalan Copies" />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <div>
                <TextField v-model="city" rules="required" :loading="isUserDetailsFormLoading" label="City" />
              </div>
              <div>
                <SelectField
                  v-model="state"
                  item-text="state_name"
                  item-value="state_code"
                  rules="required"
                  :items="states"
                  :loading="isUserDetailsFormLoading"
                  label="State"
                />
              </div>
              <div>
                <TextField
                  v-model="pincode"
                  rules="required|integer"
                  :loading="isUserDetailsFormLoading"
                  label="Pincode"
                />
              </div>
            </v-col>
            <v-col cols="6">
              <TextField v-model="bankName" :loading="isUserDetailsFormLoading" label="Bank Name" />
            </v-col>
            <v-col cols="6">
              <TextField v-model="branchName" :loading="isUserDetailsFormLoading" label="Branch Name" />
            </v-col>
            <v-col cols="6">
              <TextField v-model="ifscCode" :loading="isUserDetailsFormLoading" label="IFSC Code" />
            </v-col>
            <v-col cols="6">
              <TextField v-model="accountNumber" :loading="isUserDetailsFormLoading" label="Account Number" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-title>
          <v-btn color="highlight" dark @click="showAddNewAdminForm = !showAddNewAdminForm"
            >{{ showAddNewAdminForm ? "Close" : "Add" }} User</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" :loading="isUserDetailsFormLoading" @click="passes(updateUserDetails)">Update</v-btn>
        </v-card-title>
      </v-card>
    </ValidationObserver>

    <!-- Admin User -->
    <ValidationObserver ref="admin" v-slot="{ invalid, validated, passes, validate }">
      <v-card v-if="showAddNewAdminForm" class="mt-4">
        <v-card-title>
          Add User
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <TextField v-model="newAdminName" :loading="isAdminFormLoading" rules="required" label="Admin Name" />
            </v-col>
            <v-col cols="4">
              <TextField
                v-model="newAdminEmail"
                :loading="isAdminFormLoading"
                rules="required|email"
                label="Admin Email"
              />
            </v-col>
            <v-col cols="4">
              <TextField
                v-model="newAdminPassword"
                :loading="isAdminFormLoading"
                rules="required"
                label="Admin Password"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-title>
          <v-btn color="primary" :loading="isAdminFormLoading" @click="passes(addUser)">Add User</v-btn>
        </v-card-title>
      </v-card>
    </ValidationObserver>

    <!-- State -->
    <ValidationObserver ref="state" v-slot="{ invalid, validated, passes, validate }">
      <v-card class="mt-4">
        <div class="d-flex align-center justify-space-between">
          <v-card-title>Manage States</v-card-title>
          <v-btn color="primary" class="ma-4" @click="showAddStateForm = !showAddStateForm">
            {{ showAddStateForm ? "Close" : "Add" }}
          </v-btn>
        </div>
        <v-divider />
        <v-card-text v-if="showAddStateForm">
          <v-row class="align-center">
            <v-col cols="3">
              <div>
                <TextField v-model="stateCode" :loading="isStateFormLoading" rules="required" label="Code" />
              </div>
            </v-col>
            <v-col cols="3">
              <div>
                <TextField v-model="stateName" :loading="isStateFormLoading" rules="required" label="Name" />
              </div>
            </v-col>
            <v-col cols="3">
              <v-btn color="primary" :loading="gettingStates || isStateFormLoading" @click="passes(addState)"
                >Add State</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-text>
          <v-row>
            <v-col>
              <v-data-table
                :loading="gettingStates"
                :headers="stateHeaders"
                :items="states"
                class="elevation-1"
                hide-default-footer
              ></v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/TextField";
import TextArea from "@/components/TextArea";
import SelectField from "@/components/SelectField";
import * as AT from "@/store/actionTypes";

export default {
  name: "Settings",
  components: {
    ValidationObserver,
    TextField,
    TextArea,
    SelectField
  },
  data() {
    return {
      userId: null,
      // user details form
      adminName: "",
      firmName: "",
      gstNumber: "",
      email: "",
      mobile: "",
      landline: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      bankName: "",
      branchName: "",
      ifscCode: "",
      accountNumber: "",
      invoiceCopies: null,
      chalanCopies: null,
      isUserDetailsFormLoading: false,

      // to add new admin user
      showAddNewAdminForm: false,
      newAdminName: "",
      newAdminEmail: "",
      newAdminPassword: "",
      isAdminFormLoading: false,

      // state form
      stateCode: null,
      stateName: "",
      showAddStateForm: false,
      isStateFormLoading: false
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters.userDetails && this.$store.getters.userDetails.user_detail;
    },
    stateHeaders() {
      return [
        { text: "Code", value: "state_code" },
        { text: "Name", value: "state_name" }
      ];
    },
    gettingStates() {
      return this.$store.getters.gettingStates;
    },
    states() {
      return this.$store.getters.states || [];
    }
  },
  created() {
    this.firmName = this.userDetails.name;
    this.adminName = this.userDetails.person_name;
    this.gstNumber = this.userDetails.gst_number;
    this.email = this.userDetails.email;
    this.address = this.userDetails.address;
    this.city = this.userDetails.cityname;
    this.state = this.userDetails.state_code;
    this.pincode = this.userDetails.pincode;
    this.mobile = this.userDetails.mobile_number;
    this.landline = this.userDetails.landline_number;
    this.bankName = this.userDetails.bank_name;
    this.branchName = this.userDetails.branch_name;
    this.ifscCode = this.userDetails.ifsc_code;
    this.accountNumber = this.userDetails.account_no;
    this.invoiceCopies = this.userDetails.invoice_print_copy;
    this.chalanCopies = this.userDetails.challan_print_copy;
  },
  methods: {
    addUser() {
      this.isAdminFormLoading = true;
      const postData = {
        name: this.newAdminName,
        email: this.newAdminEmail,
        password: this.newAdminPassword
      };
      this.$store
        .dispatch(AT.ADD_ADMIN_USER, postData)
        .then(res => {
          this.showAddNewAdminForm = false;
          this.$store.dispatch(AT.GET_STATES);
          this.$store.dispatch(AT.SNACKBAR, {
            text: "New Admin User Added Successfully"
          });
          this.$refs.admin.reset();
        })
        .catch(err => {
          const error =
            (err && err.response && err.response.data && err.response.data.message) || "Something went wrong";
          this.$store.dispatch(AT.SNACKBAR, {
            color: "error",
            text: error
          });
        })
        .finally(() => (this.isAdminFormLoading = false));
    },
    updateUserDetails() {
      this.isUserDetailsFormLoading = true;
      const postData = {
        id: this.userId,
        data: {
          username: this.adminName,
          email: this.email,
          name: this.firmName,
          gst_number: this.gstNumber,
          address: this.address,
          cityname: this.city,
          state_code: this.state_code,
          pincode: this.pincode,
          mobile_number: this.mobile,
          landline_number: this.landline,
          bank_name: this.bankName,
          branch_name: this.branchName,
          ifsc_code: this.ifscCode,
          account_no: this.accountNumber
        }
      };

      this.$store
        .dispatch(AT.UPDATE_USER_DETAILS, postData)
        .then(res => {
          this.isUserDetailsFormLoading = false;
          this.$store.dispatch(AT.GET_STATES);
          this.$store.dispatch(AT.SNACKBAR, {
            text: "User Details Updated Successfully"
          });
          this.$refs.admin.reset();
        })
        .catch(err => {
          const error =
            (err && err.response && err.response.data && err.response.data.message) || "Something went wrong";
          this.$store.dispatch(AT.SNACKBAR, {
            color: "error",
            text: error
          });
        })
        .finally(() => (this.isUserDetailsFormLoading = false));
    },
    addState() {
      this.isStateFormLoading = true;
      const postData = {
        state_code: this.stateCode,
        state_name: this.stateName
      };

      this.$store
        .dispatch(AT.ADD_STATE, postData)
        .then(res => {
          this.showAddStateForm = false;
          this.$store.dispatch(AT.GET_STATES);
          this.$store.dispatch(AT.SNACKBAR, {
            text: "State Added Successfully"
          });
          this.$refs.state.reset();
        })
        .catch(err => {
          const error =
            (err && err.response && err.response.data && err.response.data.message) || "Something went wrong";
          this.$store.dispatch(AT.SNACKBAR, {
            color: "error",
            text: error
          });
        })
        .finally(() => (this.isStateFormLoading = false));
    }
  }
};
</script>
