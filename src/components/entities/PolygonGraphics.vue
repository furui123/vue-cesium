<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'polygon-graphics',
  mixins: [entityGraphics],
  props: {
    hierarchy: [Array, Object],
    height: Number,
    heightReference: Number,
    extrudedHeight: Number,
    extrudedHeightReference: Number,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: Object,
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    stRotation: {
      type: [Number, Object],
      default: 0.0
    },
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    perPositionHeight: {
      type: Boolean,
      default: false
    },
    closeTop: {
      type: Boolean,
      default: true
    },
    closeBottom: {
      type: Boolean,
      default: true
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object,
    zIndex: Number
  },
  watch: {
    hierarchy () {
    },
    height (val) {
      this.graphics.height = val
    },
    heightReference (val) {
      this.graphics.heightReference = val
    },
    extrudedHeight (val) {
      this.graphics.extrudedHeight = val
    },
    extrudedHeightReference (val) {
      this.graphics.extrudedHeightReference = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    stRotation (val) {
      this.graphics.stRotation = val
    },
    granularity (val) {
      this.graphics.granularity = val
    },
    perPositionHeight (val) {
      this.graphics.perPositionHeight = val
    },
    closeTop (val) {
      this.graphics.closeTop = val
    },
    closeBottom (val) {
      this.graphics.closeBottom = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    zIndex (val) {
      this.graphics.zIndex = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, hierarchy, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material, outline, outlineColor,
        outlineWidth, stRotation, granularity, perPositionHeight, closeTop, closeBottom, shadows, distanceDisplayCondition, zIndex } = this
      let options = {
        hierarchy,
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        stRotation,
        granularity,
        perPositionHeight,
        closeTop,
        closeBottom,
        shadows,
        distanceDisplayCondition,
        zIndex
      }
      this.removeNullItem(options)
      let polygon = new Cesium.PolygonGraphics(options)
      polygon.hierarchy = new Cesium.CallbackProperty(() => this.hierarchy, false)
      return polygon
    }
  }
}
</script>
