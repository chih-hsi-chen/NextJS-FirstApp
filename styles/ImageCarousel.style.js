import css from 'styled-jsx/css';

export default css`
.image-carousel {
    position: relative;
    overflow: hidden;
}
.image-carousel__itemlist-wrapper {
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;    
}
.image-carousel__itemlist-wrapper::-webkit-scrollbar {
    display: none;
}
.image-carousel__itemlist-wrapper.dragging {
    cursor: grab;
}
.image-carousel__itemlist-wrapper.no-scroll {
    overflow-x: hidden;
}
.image-carousel__itemlist-wrapper.scroll {
    overflow-x: auto;
}

.image-carousel__itemlist {
    position: relative;
    display: flex;
    list-style: none;
}
:global(.image-carousel__item) {
    position: relative;
}
.image-carousel.dragging :global(.image-carousel__item) {
    pointer-events: none;
}

.image-carousel__arrow {
    position: absolute;
    content: '';
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: calc(50% - 15px);
    opacity: 0.5;
    background-color: white;
    box-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.3);
    cursor: pointer;
}
.image-carousel__arrow:hover {
    transform: scale(1.5);
    opacity: 1;
}
.image-carousel__arrow--prev {
    left: -10px;
}
.image-carousel__arrow--next {
    right: -10px;
}

.image-carousel__dot-list {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
}
:global(.image-carousel__dot) {
	width: 0.8rem;
    height: 0.8rem;
    min-width: 12px;
    min-height: 12px;

	border-radius: 50%;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.4);
	cursor: pointer;
}
:global(.image-carousel__dot:not(:last-child)) {
	margin-right: .8rem;
}
:global(.image-carousel__dot--active) {
	opacity: 1;
	background-color: #bc76c4;
}

@media (min-width: 1248px) {
    .image-carousel {
        overflow: visible;
    }
}
@media (max-width: 900px) {
    .image-carousel__itemlist {
        transition: none;
    }
    .image-carousel__arrow {
        display: none;
    }
}
`;