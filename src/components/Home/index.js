import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { Carousel } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
import { addVisitCountAction, getStatisticsAction } from '../../actions/app.actions';
import { chaptersSelector } from '../../selectors/app.selectors';
import Container from '../Container';
import sections from '../../assets/images/sections.png';
import description from '../../assets/images/description.jpg';
import Text from '../../Shared/Text';
import './index.scss';

const desc = 'Դիսկրետ մաթեմատիկան մաթեմատիկայի ճյուղերից մեկն է,' +
    ' որի ուսումնասիրության առարկա են հանդիսանում դիսկրետ (ընդհատ)' +
    ' բնույթ ունեցող մաթեմատիկական կառուցվածքների հատկությունները։' +
    ' Այդպիսի կառուցվածքներից են վերջավոր խմբերը, վերջավոր գրաֆները,' +
    ' վերջավոր ավտոմատները և այլն։';

const Home = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [hasWorked, setHasWorked] = useState(false);
  const dispatch = useDispatch();
  const stats = useSelector(chaptersSelector);
  const statsArr = [
    {
      id: 'Մուտքեր կայք',
      name: 'Մուտքեր կայք',
      count: stats.visitsCount,
    }, {
      id: 'Գրանցված ուսանողներ',
      name: 'Գրանցված ուսանողներ',
      count: stats.usersCount,
    }, {
      id: 'Դասեր',
      name: 'Դասեր',
      count: stats.lessonsCount,
    }
  ];

  const animateValue = (id, start, end, duration) => {
    if (hasWorked) return;
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    const timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem('visited');
    if (hasVisited !== 'true') {
      dispatch(addVisitCountAction.request());
    }
    dispatch(getStatisticsAction.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.onbeforeunload = function() {
    localStorage.setItem('visited', 'false');
  };

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };
  }, []);

  const scrollPage = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    minHeight: '160px',
    color: '#fff',
    textAlign: 'center',
    background: '#11142c',
    padding: '0 5%'
  };

  return (
    <Container>
      <div className='ld-section-wrapper'>
        <img src={sections} alt='sections' />
        {isOnTop && (
          <div
            className='scroll-icon-wrapper'
            onClick={scrollPage}
          >
            <DownCircleOutlined className='scroll-icon' />
          </div>
        )}
      </div>
      <div className='ld-description'>
        <div className='desc-test-wrapper'>
          <Text level={3} textBold='bolderText'>
            {desc}
          </Text>
        </div>
        <div>
          <img src={description} alt='description' />
        </div>
      </div>
      <div className='ld-statistic'>
        {statsArr.map((value, index) => (
          <div
            key={index}
            className='ld-statistic-inner'
          >
            <div>
              <Text level={2} textBold='textBold'>
                {value.name}
              </Text>
            </div>
            <VisibilitySensor
              onChange={(isVisible) => {
                if (stats && isVisible) {
                  setHasWorked(true);
                  animateValue(value.id, 0, +value.count, 5000);
                }
              }}
            >
              <div>
                <Text level={3} id={value.id}>
                  {value.count}
                </Text>
              </div>
            </VisibilitySensor>
          </div>
        ))}
      </div>
      <div>
        <Carousel afterChange={onChange}>
          <div>
            <div style={contentStyle}>
              <div>
                <Text>
                  {desc}
                </Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                Author
              </div>
            </div>
          </div>
          <div>
            <h3 style={contentStyle}>{desc}</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Home;
