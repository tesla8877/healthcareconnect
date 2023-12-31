import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize as rf,
  responsiveScreenHeight as rh,
} from 'react-native-responsive-dimensions';
import {palette} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },

  container2: {
    flex: 0.93,
    backgroundColor: palette.white,
    justifyContent: 'flex-start',
  },

  contentList: {
    maxHeight: rh(90),
  },

  searchBox: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
  },

  midScreen: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: palette.white,
  },

  image: {
    width: '35%',
    margin: '1%',
    height: '30%',
    resizeMode: 'contain',
  },

  textAlignCenter: {
    margin: '1.5%',
    textAlign: 'center',
    alignSelf: 'center',
  },

  textAlignLeft: {
    margin: '1.5%',
    marginLeft: '3.5%',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  textBigBoldBlack: {
    padding: '2.5%',
    fontSize: rf(2.5),
    fontWeight: 'bold',
    color: palette.black,
  },

  textBigBoldWhite: {
    fontSize: rf(2.5),
    padding: '2.5%',
    fontWeight: 'bold',
    color: palette.white,
  },

  txtNormalBoldWhite: {
    padding: '2%',
    fontSize: rf(2),
    fontWeight: 'bold',
    color: palette.white,
  },

  textNormalBlack: {
    padding: '2%',
    fontSize: rf(2),
    fontWeight: 'normal',
    color: palette.black,
  },

  textSmallBoldBlack: {
    fontSize: rf(1.8),
    padding: '1.5%',
    fontWeight: 'bold',
    color: palette.black,
  },

  textSmallNormalBlack: {
    fontSize: rf(1.8),
    padding: '1.5%',
    fontWeight: 'normal',
    color: palette.black,
  },

  buttonNoColor: {
    margin: '3%',
    marginBottom: '4.5%',
    width: '90%',
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },

  shadowGray: {
    shadowColor: palette.lightGrey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
