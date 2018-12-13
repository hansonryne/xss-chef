import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { disableRecipe } from '~/actions/CookBook'

import CookBookItem from '~/components/CookBookItem'

function mapStateToProps (state) {
  return {
    cookBook: state.cookBook
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    disableRecipe
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CookBookItem)