<template>
  <div class="app-dialog">
    <v-dialog v-model="dialog" :full-width="fullWidth" :max-width="newMaxWidth" persistent>
      <v-card>
        <v-card-title>
          <!-- Dialog title if a title prop found -->
          <div v-if="title" class="headline">{{ title }}</div>
          <!-- Dialog title if a title slot provided -->
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <!-- Dialog body text if message prop found -->
          <div v-if="message">{{ message }}</div>
          <!-- Dialog body if a body slot provided -->
          <slot name="body" />
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="cancelAction" flat :disabled="loading" @click.native="$emit('app-dialog', false)">
            {{ cancelAction }}
          </v-btn>
          <v-spacer />
          <v-btn
            v-if="confirmAction"
            :loading="loading"
            :disabled="loading"
            :flat="confirmActionFlat"
            :color="confirmActionColor"
            @click.native="$emit('app-dialog', true)"
          >
            {{ confirmAction }}
          </v-btn>
        </v-card-actions>
        <!-- An optional close button to simply close the dialog -->
        <div v-if="closeAction" class="text-xs-center">
          <v-btn
            flat
            :disabled="loading"
            class="body1 font-weight-bold text-capitalize"
            @click.native="$emit('app-dialog', false)"
          >
            <u>{{ closeAction }}</u>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "AppModal",
  props: {
    fullWidth: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: Number,
      default: 450
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    cancelAction: {
      type: String,
      default: ""
    },
    confirmAction: {
      type: String,
      default: ""
    },
    closeAction: {
      type: String,
      default: ""
    },
    confirmActionColor: {
      type: String,
      default: "primary"
    },
    confirmActionFlat: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialog: true
    };
  },
  computed() {
    newMaxWidth: {
      return this.maxWidth ? this.maxWidth : 450;
    }
  }
};
</script>
