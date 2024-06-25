<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NCard, NDatePicker, NDivider, NInput, NRadioGroup, NRadioButton, NInputNumber, NSpace, NIcon, useMessage } from 'naive-ui';


const props = defineProps(['flights'])
const message = useMessage();

const tripType = ref<'round_trip' | 'one-way'>('round_trip');
const origin_airport = ref('');
const origin_airport_code = ref('');
const destination_airport_code = ref('');
const destination_airport = ref('');
const departure_date = ref<string | null | undefined>(null);
const arrival_date = ref<string | null | undefined>(null);
const return_date = ref<string | null | undefined>(null);
const return_arrival_date = ref<string | null | undefined>(null);
const passengers = ref<number>(1);

const addFlights = () => {

  //check the trip type
  if (tripType.value === 'one-way') {
    //please add validation here
    if (!origin_airport.value || !destination_airport.value || !departure_date.value || !arrival_date.value) {
      message.error('Please fill all the fields');
      return;
    }
    //please add validation here field wise


  }

  if (tripType.value === 'round_trip') {
    //please add validation here
    if (!origin_airport.value || !destination_airport.value || !departure_date.value || !arrival_date.value || !return_date.value || !return_arrival_date.value) {
      message.error('Please fill all the fields');
      return;
    }
    //please add validation here field wise
  }


  props.flights.push({
    trip_type: tripType.value,
    origin_airport: origin_airport.value,
    destination_airport: destination_airport.value,
    origin_airport_code: origin_airport_code.value,
    destination_airport_code: destination_airport_code.value,
    departure_date: departure_date.value,
    arrival_date: arrival_date.value,
    return_date: return_date.value,
    return_arrival_date: return_arrival_date.value,
    passengers: passengers.value,
  });
  tripType.value = 'round_trip';
  origin_airport.value = '';
  origin_airport_code.value = '';
  destination_airport_code.value = '';
  destination_airport.value = '';
  departure_date.value = null;
  arrival_date.value = null;
  return_date.value = null;
  return_arrival_date.value = null;
  passengers.value = 1;

};

const removeFlight = (index: number) => {
  props.flights.splice(index, 1);
};

</script>
<template>
  <div>
    <n-card>
      <div class="flex items-center">
        <n-radio-group v-model:value="tripType" class="mr-4">
          <n-radio-button value="round_trip">Round trip</n-radio-button>
          <n-radio-button value="one-way">One way</n-radio-button>
        </n-radio-group>
        <n-divider vertical />
        <n-space class="ml-4">

          <NInputNumber min="1" v-model:value="passengers" placeholder="No of Passangers" />

        </n-space>
      </div>


      <div class="grid grid-cols-4 mt-4 gap-x-2 gap-y-2">
        <n-input v-model:value="origin_airport" placeholder="From" />
        <n-input v-model:value="destination_airport" placeholder="Where to?" />
        <n-date-picker v-model:formatted-value="departure_date" type="datetime" value-format="dd-MM-yyyy HH:mm:ss"
          placeholder="Departure Date Time" />
        <n-date-picker v-model:formatted-value="arrival_date" type="datetime" value-format="dd-MM-yyyy HH:mm:ss"
          placeholder="Arrival Date Time" />
        <n-date-picker v-model:formatted-value="return_date" type="datetime" value-format="dd-MM-yyyy HH:mm:ss"
          placeholder="Return Departure " v-if="tripType === 'round_trip'" />
        <n-date-picker v-model:formatted-value="return_arrival_date" type="datetime" value-format="dd-MM-yyyy HH:mm:ss"
          placeholder="Return Arrival" v-if="tripType === 'round_trip'" />
      </div>
      <n-button type="primary" class="mt-4" @click="addFlights">
        <n-icon size="30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
          </svg>
        </n-icon>
        Add Flight</n-button>
    </n-card>



    <div class="my-5 bg-[#1e51a4] p-0 border border-grey-500 rounded-lg" v-for="(flight, index) in flights"
      :key="index">

      <div class="grid px-5 py-2 gap-x-2">
        <div class="flex items-center justify-between text-white">

          <div class="flex">
            <h4>{{ flight.origin_airport }} </h4><span class="mx-3">
              <NIcon :size="24" v-if="flight.trip_type === 'round_trip'"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 10h14l-4-4m0 8H3l4 4" />
                </svg></NIcon>
              <NIcon :size="24" v-else><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 15 15">
                  <path fill="currentColor"
                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                </svg></NIcon>
            </span>
            <h4> {{ flight.destination_airport }}</h4>
          </div>
          <div>
            <NButton quaternary @click="removeFlight(index)">
              <template #icon>
                <n-icon size="30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64">
                    <path fill="#E13348"
                      d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z" />
                    <path fill="#fff"
                      d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z" />
                  </svg>
                </n-icon>
              </template>
            </NButton>



          </div>
        </div>

      </div>
      <div class="grid bg-white grid-cols-3 mt-4 gap-x-8 p-5">

        <div class="mt-3">
          <h4>Departure: <span class="ms-3 text-lg text-[#555]"> {{ flight.departure_date }}</span></h4>


        </div>
        <div class="mt-3">
          <h4>Arrival: <span class="ms-3 text-lg text-[#555]"> {{ flight.arrival_date }}</span></h4>


        </div>
        <div class="mt-3" v-if="flight.trip_type === 'round_trip'">
          <h4>Return Departure: <span class="ms-3 text-lg text-[#555]"> {{ flight.return_date }}</span></h4>


        </div>
        <div class="mt-3" v-if="flight.trip_type === 'round_trip'">
          <h4>Return Arrival: <span class="ms-3 text-lg text-[#555]"> {{ flight.return_arrival_date }}</span></h4>


        </div>
        <div class="mt-3">
          <h4>Passengers: <span class="ms-3 text-lg text-[#555]"> {{ flight.passengers }}</span></h4>


        </div>
        <div class="mt-3">
          <h4>
            Trip Type: <span class="ms-3 text-lg text-[#555]"> {{ flight.trip_type }}</span></h4>


        </div>




      </div>

    </div>
  </div>
</template>
