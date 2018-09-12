<template>
  <div class="accounting">
    <header class="header">
      <h3 class="title">DAILY MONEY</h3>
    </header>
    <main class="main">
      <div class="settings">
        <div><label for="available">Total available amount</label></div>
        <div>
          <input
            id="available"
            v-model="total"
            type="number">
        </div>
        <div><label for="counter">Number of days</label></div>
        <div>
          <input
            id="counter"
            v-model="days"
            type="number">
        </div>
        <button
          class="button"
          @click="calculate">Save</button>
      </div>
      <div class="statement">
        <div>BALANCE: {{ balance }} for {{ days }} day(s)</div>
        <div>AVAILABLE TODAY: {{ dailyAmount }}</div>
        <div><label for="spend">Spend money</label></div>
        <div>
          <input
            id="spend"
            v-model="expense"
            type="number">
        </div>
        <button
          class="button"
          @click="spend">Ok</button>
      </div>
      <div class="history">
        <table class="list">
          <caption class="table-header">Cost history:</caption>
          <tr
            v-for="(record, i) in listOfExpenses"
            :key="i"
            class="row"
          >
            <td class="id cell">{{ i + 1 }}</td>
            <td class="record cell">{{ record }}</td>
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Accounting',

  data() {
    return {
      total: null,
      balance: null,
      days: null,
      dailyAmount: null,
      expense: null,
      listOfExpenses: [],
    };
  },

  methods: {
    calculate() {
      this.balance = this.total;
      this.dailyAmount = Math.floor(this.total / this.days);
    },

    spend() {
      this.listOfExpenses.push(this.expense);
      this.dailyAmount -= this.expense;
      this.balance -= this.expense;
    },
  },
};
</script>

<style lang="scss" scoped>
.accounting, .settings, .statement, .history {
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
              0px 1px 1px 0px rgba(0,0,0,0.14),
              0px 1px 3px 0px rgba(0,0,0,0.12);
}

.header, .main, .settings, .statement, .history {
  padding: 16px;
}

.accounting {
  width: 360px;
  margin: 0 auto;

  .header {
    box-sizing: border-box;
    height: 55px;
    background-color: hsl(231, 48%, 48%);
    color: hsl(0, 0%, 100%);
    text-align: center;

    .title {
      margin: 0;
    }
  }

  .main {
    min-height: 100%;

    .settings {
      .button {
        cursor: pointer;
      }
    }

    .statement {
      .button {
        cursor: pointer;
      }
    }

    .history {
      .table-header {
        text-align: left;
      }

      .list {
        width: 100%;
        border-collapse: collapse;

        .row:nth-child(even) {
          background: hsl(0, 0%, 100%);
        }

        .row:nth-child(odd) {
          background: hsl(0, 0%, 80%);
        }

        .cell {
          margin: 0;
          padding: 3px 6px;
          border: 0;
        }

        .id {
          width: 20px;
        }
      }
    }
  }
}
</style>
