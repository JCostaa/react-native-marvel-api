import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  characterWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 25,
  },
  characterInfo: {
    alignItems: 'center',
  },
  characterContainerInfo: {
    backgroundColor: '#fff',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerButton: {
    flexDirection: 'row',
  },
  buttonInfo: {
    marginHorizontal: 20,
  },
  containerDetail: {
    flex: 1,
  },
});

export default styles;
