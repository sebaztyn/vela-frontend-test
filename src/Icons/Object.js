import React from "react"

const SvgObject = props => (
  <svg width={20} height={20} fill="none" {...props}>
    <path fill="url(#Object_svg__pattern0)" d="M.15.154h18.93v19.38H.15z" />
    <mask
      id="Object_svg__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="url(#Object_svg__pattern1)" d="M.15.154h18.93v19.38H.15z" />
    </mask>
    <g mask="url(#Object_svg__a)">
      <path fill="#CCCFD4" d="M.15.154h18.93v19.38H.15z" />
    </g>
    <defs>
      <pattern
        id="Object_svg__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#Object_svg__image0" transform="scale(.00781)" />
      </pattern>
      <pattern
        id="Object_svg__pattern1"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#Object_svg__image0" transform="scale(.00781)" />
      </pattern>
      <image
        id="Object_svg__image0"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAmRJREFUeAHt2zFKxEAUBuCorYKt4inEwtLLeI+5xV7H1ht4Da0FfQMJhBB2R7cImfctDOvqhmS+/88kRRwGLwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsInAbez1dZM92+nmAjX89xg/MUoMr0QC8/BrAZQgefhKkKQAa2f+FP70XpJYpJtmS/hK0Gkt/hK+EnRWguuYz3S3P4Xb+l46szhrOldnbb3dxt+x68cYT/84hJfY5iLGWwyvHQtcxrEfYrSe+cvvlR3P3aGPAkqgCoMSKIES6MCgBEqgBDoQAu4J1EAJdMBKoAMuBzpQBdwT6IES6ICVQAdcDnSgCrgn0AMl0AErgQ64HOhAFXBPoAdKoANWAh1wOdCBKuCeQA+G+zD4irF8lLzl82ds98BwvwJ3cegfMVrCXn6nhv+836k7cuEn7oDwhW/Zz9gBZ37G1Mc5C1/4lv2MHXDmZ0zdsp84deEL37KfuAPCF767/YwdcOZnTH2cs/CFb9nP2AFnfsbULfuJUxe+8C37iTsgfOG728/YAWd+xtTHOd/Eu0e3ExegTr3EWD6Xf+qz5/arXEevEnM5Ffr0d+F3FPx8Ki0lEP5crMOfj5VA+B0GvjaltRIIf02q49/NSyD8joM+NrVaAuEfE0rwN/+fnyBkUyRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAlkEfgGUJ0UJGDY99gAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
)

export default SvgObject
