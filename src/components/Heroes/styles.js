import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  heroes: {
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 5,
  },
  heroesWrapper: {
    height: 150,
    width: 100,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  heroesBox: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  heroesName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  heroesInfo: {
    fontSize: 10,
    color: 'rgba(0,0,0,.6)',
  },
  heroesDescription: {
    fontSize: 12,
    marginVertical: 5,
  },
  heroesViewMore: {
    color: '#e71a24',
  },
});

export default styles;
