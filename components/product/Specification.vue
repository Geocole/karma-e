<template functional>
  <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr>
          <td>
            <h5>Width</h5>
          </td>
          <td>
            <h5>
              {{ props.specifications.width }}{{ props.specifications.unit }}
            </h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Height</h5>
          </td>
          <td>
            <h5>
              {{ props.specifications.height }}{{ props.specifications.unit }}
            </h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Depth</h5>
          </td>
          <td>
            <h5>
              {{ props.specifications.depth }}{{ props.specifications.unit }}
            </h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Weight</h5>
          </td>
          <td>
            <h5>{{ props.specifications.weight }}gm</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Quality checking</h5>
          </td>
          <td>
            <h5>{{ props.specifications.qualityChecking ? "Yes" : "No" }}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Freshness Duration</h5>
          </td>
          <td>
            <h5>{{ props.specifications.freshnessDuration }}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>When packeting</h5>
          </td>
          <td>
            <h5>{{ props.specifications.packeting }}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Each Box contains</h5>
          </td>
          <td>
            <h5>{{ props.specifications.productPerBox }}pcs</h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Specification",
  props: {
    specifications: {
      type: Object,
      default() {
        return {
          width: 128,
          height: 150,
          unit: "mm",
          depth: 86,
          weight: 52,
          qualityChecking: true,
          freshnessDuration: "3 days",
          packeting: "Without touch of hand",
          productPerBox: 60
        };
      }
    }
  }
};
</script>

<style scoped></style>
